import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "http://localhost:5000/api/" // Adjust the base URL if needed
});

const SoftwareData = () => {
  const [softwareData, setSoftwareData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/getsoftware");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSoftwareData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const dataTable = {
    columns: [
      { label: "Software Name", field: "softwareName", sort: "asc", width: 150 },
      { label: "Alias", field: "alias", sort: "asc", width: 270 },
      { label: "Version", field: "version", sort: "asc", width: 200 },
      { label: "Serial Number", field: "serialNumber", sort: "asc", width: 100 },
      { label: "Purchase Date", field: "purchaseDate", sort: "asc", width: 150 },
      { label: "Expiration Date", field: "expirationDate", sort: "asc", width: 100 },
      { label: "License Type", field: "licenseType", sort: "asc", width: 150 },
      { label: "Description", field: "description", sort: "asc", width: 150 },
      { label: "Delete", field: "actions", width: 100 },
      { label: "Edit", field: "Edit", width: 100 },
    ],
    rows: softwareData.map((item, index) => ({
      id: index, // Adding an id for each row
      softwareName: item.softwareName,
      alias: item.alias,
      version: item.version,
      serialNumber: item.serialNumber,
      purchaseDate: item.purchaseDate,
      expirationDate: item.expirationDate,
      licenseType: item.licenseType,
      description: item.description,
      actions: (
        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item._id)}>
          Delete
        </button>
      ),
      Edit: (
        <button className="btn btn-primary btn-sm" onClick={() => handleEdit(item._id)}>
          Edit
        </button>
      ),
    })),
  };

  const handleEdit = (productId) => {
    // Implement edit functionality here
    console.log("Edit", productId);
  };

  const handleDelete = (productId) => {
    // Display a confirmation dialog
    const isConfirmed = window.confirm("Are you sure you want to delete this product?");
    
    // If the user confirms deletion
    if (isConfirmed) {
      // Send a DELETE request to the backend to delete a product
      axiosAPI.delete(`software/${productId}`)
        .then((res) => {
          console.log(res.data);
          // Update the software data list after deletion
          setSoftwareData(softwareData.filter(item => item._id !== productId));
          alert("Software data deleted successfully");
        })
        .catch((error) => {
          console.error(error);
          alert("An error occurred while deleting the software data");
        });
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Tables" breadcrumbItem="Data Tables" />
        <Row>
          <Col className="col-12">

            <Card>

              <CardBody>
                
              <button className="btn btn-primary mr-2" onClick={() => window.location.href = "/softwareadddata"}>
             Add the components
               </button>


                <CardSubtitle className="mb-3">
                  Displaying software license data in a table
                </CardSubtitle>
                <MDBDataTable responsive bordered data={dataTable} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default SoftwareData;
