import React from "react";
import { Modal, Button } from "react-bootstrap";

const PaymentModal = ({ show, handleClose, productDetails }) => {
    console.log("payment model");
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Payment Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Product Category: {productDetails.category}</h5>
                <p>Distance: {productDetails.distance} km</p>
                <p>Amount: ₹{productDetails.amount}</p>
                <p>From: {productDetails.From}</p>
                <p>To: {productDetails.To}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PaymentModal;
