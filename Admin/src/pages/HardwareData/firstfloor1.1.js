import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import axios from "axios";
import Addtodata from "./addtodata";
import * as XLSX from 'xlsx';

const axiosAPI = axios.create()

const Firstfloor = () => {
  const [products, setProducts] = useState([]);
  const [showAddPage, setShowAddPage] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/getfloordata");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setProducts(data);  
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = (productId) => {
    // Confirm deletion with the user
    const isConfirmed = window.confirm("Are you sure you want to delete this product?");
    
    // If user confirms deletion
    if (isConfirmed) {
      // Send DELETE request to the API endpoint with the productId
      axiosAPI.delete(`http://localhost:5000/api/deleteproduct/${productId}`)
        .then((res) => {
          // If deletion is successful, log the response data
          console.log(res.data);
          // Alert user that product was deleted successfully
          alert("Product deleted successfully");
          // Redirect to the /hardware route
          window.location.href="/hardware";
        })
        .catch((error) => {
          // If an error occurs during deletion, log the error
          console.error(error);
          // Alert user about the error
          alert("An error occurred while deleting the product");
        });
    }
  };
  
  

const onClickAdd = () => {
  setShowAddPage(true); // Set showAddPage to true to render the "Add" page
};

const onClickCancel = () => {
  setShowAddPage(false); // Set showAddPage to false to hide the "Add" page
};

  const tableColumns = [
    {
      label: "ID",
      field: "id",
      sort: "asc",
      width: 150
    },
    {
      label: "Name",
      field: "name",
      sort: "asc",
      width: 150
    },
    {
      label: "Serial Number",
      field: "serialNumber",
      sort: "asc",
      width: 150
    },
    {
      label: "Category",
      field: "category",
      sort: "asc",
      width: 150
    },
    {
      label: "Attributes",
      field: "attributes",
      sort: "asc",
      width: 150
    },
    {
      label: "Action",
      field: "action",
      sort: "asc",
      width: 200,
      render: (row) => (
        <div>
          <button className="btn btn-danger" onClick={() => handleDelete(row.id)}>Delete</button>
        </div>
      )}
  ];

  const tableRows = products.map((product) => {
    const attributesString = product.attributes
      .map((attribute) => `${attribute.name}: ${attribute.value}`)
      .join(", ");

    return {
      id: product.id,
      name: product.name,
      serialNumber: product.serialNumber,
      category: product.category,
      attributes: attributesString,
      action: (
        <div>
          {/* <button className="btn btn-primary mr-2" onClick={onClickAdd}>Add</button> */}
          <button className="btn btn-danger" onClick={() => handleDelete(product._id)}>Delete</button>
        </div>
      )
    };
  });

  console.log("tableRows:", tableRows);


  const handleDownloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(products);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Products');
    XLSX.writeFile(workbook, 'products.xlsx');
  };

  return (
    <React.Fragment>
      <div>
        {showAddPage ? (
          <Addtodata onCancel={onClickCancel} />
        ) : (
          <React.Fragment>
            {/* <Breadcrumbs title="Tables" breadcrumbItem="Editable Table" /> */}
            <Row>
              
              <Col>

                <Card>
                  
                  <CardBody>
                 <button className="mr-2" style={{border:"black",border:"none"}} onClick={onClickAdd}>Add</button>
                 <button className="mr-2,mL-2" style={{marginLeft:"5px",border:"none"}} onClick={handleDownloadExcel}>Download</button>

                    <CardTitle className="h4"></CardTitle>
                   
                    <div className="table-responsive">
                      <MDBDataTable
                        responsive
                        bordered
                        striped
                        hover
                        data={{ columns: tableColumns, rows: tableRows }}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default Firstfloor;
