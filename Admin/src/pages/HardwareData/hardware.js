import React, { useState } from "react";
import { Row, Col, Button } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import Firstfloor from "./firstfloor1.1";
import Firstfloor12 from "./firstfloor1.2";
import Secondfloor11 from "./secondfloor2.1";
import Secondfloor22 from "./secondfloor2.2";
import Thirdfloor31 from "./thirdfloor3.1";
import Thirdfloor32 from "./thirdfloor3.2";
import Fourthfloor41 from "./fourthfloor4.1";
import Fourthfloor42 from "./fourthfloor4.2";
import Fulldata from "./fulldata11";
import Addtodata from "./addtodata";

const Hardware = () => {
  const [selectedFloor, setSelectedFloor] = useState('1');
  const [selectedSubfloor, setSelectedSubfloor] = useState('1.1');

  const handleFloorSelect = (e) => {
    setSelectedFloor(e.target.value);
    setSelectedSubfloor('');
  };

  const handleSubfloorSelect = (e) => {
    setSelectedSubfloor(e.target.value);
  };

  const handleAddButtonClick = () => {
    // Add your logic here for what happens when the Add button is clicked
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Email" breadcrumbItem="Read Email" />
        <Row>
          <Col md="6">
            <Row>
              <Col md="6">
                <label htmlFor="floor-select">Choose floor:</label>
                <select id="floor-select" value={selectedFloor} onChange={handleFloorSelect}>
                  <option value="1">1st floor</option>
                  <option value="2">2nd floor</option>
                  <option value="3">3rd floor</option>
                  <option value="4">4th floor</option>
                </select>
              </Col>
              <Col md="6">
                {selectedFloor && (
                  <label htmlFor="subfloor-select">Choose Hall:</label>
                )}
                <select id="subfloor-select" value={selectedSubfloor} onChange={handleSubfloorSelect}>
                  {selectedFloor === '1' && (
                    <>
                      <option value="">select Hall</option>
                      <option value="1.1">1.1</option>
                      <option value="1.2">1.2</option>
                    </>
                  )}
                  {selectedFloor === '2' && (
                    <>
                      <option value="">select Hall</option>
                      <option value="2.1">2.1</option>
                      <option value="2.2">2.2</option>
                    </>
                  )}
                  {selectedFloor === '3' && (
                    <>
                      <option value="">select Hall</option>
                      <option value="3.1">3.1</option>
                      <option value="3.2">3.2</option>
                    </>
                  )}
                  {selectedFloor === '4' && (
                    <>
                      <option value="">select Hall</option>
                      <option value="4.1">4.1</option>
                      <option value="4.2">4.2</option>
                    </>
                  )}
                </select>
              </Col>
            </Row>
          </Col>
          <Col md="3">
            {/* <Button color="primary" onClick={handleAddButtonClick}>Add</Button> */}
          </Col>
        </Row>

        {/* Render respective components based on selected floor and subfloor */}
        {(selectedFloor === '1' && selectedSubfloor === '') && <Fulldata />}

        {(selectedFloor === '1' && selectedSubfloor === '1.1') && <Firstfloor />}
        {(selectedFloor === '1' && selectedSubfloor === '1.2') && <Firstfloor12 />}
        {(selectedFloor === '2' && selectedSubfloor === '') && <Fulldata />}

        {(selectedFloor === '2' && selectedSubfloor === '2.1') && <Secondfloor11 />}
        {(selectedFloor === '2' && selectedSubfloor === '2.2') && <Secondfloor22 />}
        {(selectedFloor === '3' && selectedSubfloor === '') && <Fulldata />}
        {(selectedFloor === '4' && selectedSubfloor === '') && <Fulldata />}  

        
        {(selectedFloor === '3' && selectedSubfloor === '3.1') && <Thirdfloor31 />}
        {(selectedFloor === '3' && selectedSubfloor === '3.2') && <Thirdfloor32 />}
        {(selectedFloor === '4' && selectedSubfloor === '4.1') && <Fourthfloor41 />}
        {(selectedFloor === '4' && selectedSubfloor === '4.2') && <Fourthfloor42 />}
      </div>
    </React.Fragment>
  );
};

export default Hardware;
