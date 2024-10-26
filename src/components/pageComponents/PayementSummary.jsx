import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import OrderAddress from "../layerComponents/OrderAddress";
import PaymentDetails from "../layerComponents/PaymentDetails";
import PaymentModal from "../baseComponents/PaymentModel"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

function CustomAccordion() {
  const {category} = useContext(DataContext);
  const [modalShow, setModalShow] = useState(false);

   // Example product details
   const categories = "Electronics"; 
   const from = "Location A";
   const to = "Location B";
 
   const productDetails = {
     category: category,
     distance: 56, 
     amount: 296.0,
     From: from,
     To: to,
   };
 

  return (
    <>
      <Accordion defaultActiveKey="0">
        {/* First Accordion Item */}
        <Accordion.Item eventKey="0">
          <Accordion.Header className="product">
            <p style={{ fontSize: "11px", fontWeight: "bold" }} className="m-0 font-weight-bold">
              Order Summary
            </p>
            <p className="m-0" style={{fontSize:"11px"}}>Total distance 56km</p>
          </Accordion.Header>
          <Accordion.Body>
            <OrderAddress />
          </Accordion.Body>
        </Accordion.Item>

        {/* Second Accordion Item */}
        <Accordion.Item eventKey="1">
          <Accordion.Header className="load">
            <p style={{ fontSize: "11px", fontWeight: "bold" }} className="m-0 font-weight-bold">
              Payment Summary
            </p>
            <div className="d-flex ms-2 justify-content-end">
            <p className="m-0" style={{fontSize:"11px"}}>Total weight 56kg</p>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <PaymentDetails />
          </Accordion.Body>
        </Accordion.Item>

        {/* Third Accordion Item */}
        <Accordion.Item eventKey="2">
          <Accordion.Header className="load">
            <p style={{ fontSize: "11px", fontWeight: "bold" }} className="m-0 font-weight-bold">
              Total weight
            </p>
            <div className="d-flex ms-2 justify-content-end">
              <div className="button_color">118 kg</div>
            </div>
          </Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>

        {/* Fourth Accordion Item */}
        <Accordion.Item eventKey="3">
          <Accordion.Header className="load">
            <p style={{ fontSize: "11px", fontWeight: "bold" }} className="m-0 font-weight-bold">
              SUB TOTAL
            </p>
            <div className="d-flex ms-2 justify-content-end">
              <div className="button_color">₹2976</div>
            </div>
          </Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>

        <div className="px-4 pt-2">
          <p style={{ fontSize: "11px" }}>I agree to the terms and conditions</p>
          <button
            className="btn btn-success"
            onClick={() => setModalShow(true)} 
          >
            PAY INR 296.00
          </button>
        </div>
      </Accordion>

      {/* Payment Modal */}
      <PaymentModal
        show={modalShow}
        handleClose={() => setModalShow(false)}
        productDetails={productDetails}
      />
    </>
  );
}

export default CustomAccordion;
