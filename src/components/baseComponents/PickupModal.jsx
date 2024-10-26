import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PickupModal = ({ show, handleClose, handleSave, pickupData, setPickupData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPickupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Pickup Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            {[
              ["Pickup Date", "date", "pickupDate", 6],
              ["Pickup Time", "time", "pickupTime", 6],
              ["Pickup End Time", "time", "pickupEndTime", 6],
              ["Contact Name", "text", "contactName", 6],
              ["Contact Number", "tel", "contactNumber", 6],
              ["Email", "email", "email", 6],
              ["PAN Number", "text", "panNumber", 6],
              ["GST Number", "text", "gstNumber", 6],
              ["Secondary Contact Number", "tel", "secondaryContactNumber", 6],
            ].map(([label, type, name, colSize]) => (
              <Col key={name} xs={12} md={colSize}>
                <Form.Group className="mb-3" controlId={name}>
                  <Form.Label>{label}</Form.Label>
                  <Form.Control
                    type={type}
                    name={name}
                    value={pickupData[name] || ""}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            ))}
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => handleSave("pickup")}>
          Add Details
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PickupModal;
