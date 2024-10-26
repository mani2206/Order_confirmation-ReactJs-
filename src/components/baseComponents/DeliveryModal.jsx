import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const DeliveryModal = ({ show, handleClose, handleSave, deliveryData, setDeliveryData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Delivery Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            {[
              ["Delivery Contact Name", "text", "deliveryContactName", 6],
              ["Email", "email", "email", 6],
              ["Delivery Contact Number", "tel", "deliveryContactNumber", 6],
              ["Secondary Contact Number", "tel", "deliverySecondaryNumber", 6],
              ["Address Line 1", "text", "addressLine1", 12],
              ["Address Line 2", "text", "addressLine2", 12],
              ["Building No", "text", "buildingNo", 6],
              ["Street Name", "text", "streetName", 6],
              ["Pincode", "text", "pincode", 6],
              ["City", "text", "city", 6],
            ].map(([label, type, name, colSize]) => (
              <Col key={name} xs={12} md={colSize}>
                <Form.Group className="mb-3" controlId={name}>
                  <Form.Label>{label}</Form.Label>
                  <Form.Control
                    type={type}
                    name={name}
                    value={deliveryData[name] || ''}
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
        <Button variant="primary" onClick={() => handleSave("delivery")}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeliveryModal;
