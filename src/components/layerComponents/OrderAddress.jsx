import React, { useState, useContext } from "react";
import DataContext from "../../context/DataContext";
import PickupModal from "../baseComponents/PickupModal";
import DeliveryModal from "../baseComponents/DeliveryModal";

export default function OrderAddress() {
  const { category, load } = useContext(DataContext);
  const [showPickupModal, setShowPickupModal] = useState(false);
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);

  const [pickupData, setPickupData] = useState({
    pickupDate: "",
    pickupTime: "",
    pickupEndTime: "",
    contactName: "",
    contactNumber: "",
    email: "",
    panNumber: "",
    gstNumber: "",
    secondaryContactNumber: "",
  });

  const [deliveryData, setDeliveryData] = useState({
    deliveryContactName: "",
    email: "",
    deliveryContactNumber: "",
    deliverySecondaryNumber: "",
    addressLine1: "",
    addressLine2: "",
    buildingNo: "",
    streetName: "",
    pincode: "",
    city: "",
  });

  const handleChange = (e, setData, data) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setPickupData("")
  };

  const handleSave = (modalType) => {
    if (modalType === "pickup") {
      console.log("Saved Pickup Data:", pickupData);
      setShowPickupModal(false);
    } else if (modalType === "delivery") {
      console.log("Saved Delivery Data:", deliveryData);
      setShowDeliveryModal(false);
    }


  };

  return (
    <>
      {/* Pickup Information */}
      <div>
        <h5 style={{ fontSize: "12px", fontWeight: "bold" }}>
          Pickup Address
          <a href="#" className="px-2" onClick={() => setShowPickupModal(true)}>
            ( Edit )
          </a>
        </h5>
        <p style={{ fontSize: "11px" }}>
          Burger st,near police station,ford nagar,kochi
        </p>
        <div>
          <h5 style={{ fontSize: "12px", fontWeight: "bold" }}>
            Pickup Contact Details
          </h5>
          <p style={{ fontSize: "11px" }}>
            {pickupData.contactName ? pickupData.contactName : "name"} |{" "}
            {pickupData.contactNumber ? pickupData.contactNumber : "number"} |
            {pickupData.email ? pickupData.email : "email"}
          </p>
        </div>
        <div>
          <h5 style={{ fontSize: "12px", fontWeight: "bold" }}>
            Pickup Date and Time
          </h5>
          <p style={{ fontSize: "11px" }}>
            {pickupData.pickupDate ? pickupData.pickupDate : "date"} |{" "}
            {pickupData.pickupTime ? pickupData.pickupTime : "startTime"} |
            {pickupData.pickupEndTime ? pickupData.pickupEndTime : "end time"}
          </p>
        </div>
        <hr />
      </div>

      {/* Delivery Information */}
      <div>
        <h5 style={{ fontSize: "12px", fontWeight: "bold" }}>
          Delivery Address
          <a
            href="#"
            className="px-2"
            onClick={() => setShowDeliveryModal(true)}
          >
            ( Edit )
          </a>
        </h5>
        <p style={{ fontSize: "11px" }}>
          {deliveryData.addressLine1
            ? deliveryData.addressLine1
            : "addressline"}
        </p>
        <div>
          <h5 style={{ fontSize: "12px", fontWeight: "bold" }}>
            Develiry contact Details
          </h5>
          <p style={{ fontSize: "11px" }}>
            {deliveryData.deliveryContactName
              ? deliveryData.deliveryContactName
              : "contactname"}{" "}
            |
            {deliveryData.deliveryContactNumber
              ? deliveryData.deliveryContactNumber
              : "contactnumber"}{" "}
            |{deliveryData.email ? deliveryData.email : "email"}
          </p>
        </div>
        <hr />
      </div>

      <div>
        <h6 style={{ fontSize: "12px", fontWeight: "bold" }}>
          Product Category
        </h6>
        <p style={{ fontSize: "11px" }}>{category}</p>
      </div>
      <hr />
      <div>
        <h6 style={{ fontSize: "12px", fontWeight: "bold" }}>Load Category</h6>
        <p style={{ fontSize: "11px" }}>{load}</p>
      </div>

      {/* Pickup Modal
      {showPickupModal && (
        <div style={modalOverlayStyle}>
          <div style={modalStyle}>
            <h4>Edit Pickup Information</h4>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              {[
                ["Pickup Date", "date", "pickupDate"],
                ["Pickup Time", "time", "pickupTime"],
                ["Pickup End Time", "time", "pickupEndTime"],
                ["Contact Name", "text", "contactName"],
                ["Contact Number", "tel", "contactNumber"],
                ["Email", "email", "email"],
                ["PAN Number", "text", "panNumber"],
                ["GST Number", "text", "gstNumber"],
                ["Secondary Contact Number", "tel", "secondaryContactNumber"],
              ].map(([label, type, name]) => (
                <div key={name}>
                  <label>{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={pickupData[name]}
                    onChange={(e) => handleChange(e, setPickupData, pickupData)}
                  />
                </div>
              ))}
              <button type="button" onClick={() => handleSave("pickup")}>
                Save
              </button>
              <button type="button" onClick={() => setShowPickupModal(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )} */}
      {showPickupModal && (
        <PickupModal
          show={showPickupModal}
          handleClose={() => setShowPickupModal(false)}
          handleSave={handleSave}
          pickupData={pickupData}
          setPickupData={setPickupData}
        />
      )}

      {/* Delivery Modal */}
      {/* {showDeliveryModal && (
        <div style={modalOverlayStyle}>
          <div style={modalStyle}>
            <h4>Edit Delivery Information</h4>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              {[
                ["Delivery Contact Name", "text", "deliveryContactName"],
                ["Email", "email", "email"],
                ["Delivery Contact Number", "tel", "deliveryContactNumber"],
                ["Secondary Contact Number", "tel", "deliverySecondaryNumber"],
                ["Address Line 1", "text", "addressLine1"],
                ["Address Line 2", "text", "addressLine2"],
                ["Building No", "text", "buildingNo"],
                ["Street Name", "text", "streetName"],
                ["Pincode", "text", "pincode"],
                ["City", "text", "city"],
              ].map(([label, type, name]) => (
                <div key={name}>
                  <label>{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={deliveryData[name]}
                    onChange={(e) =>
                      handleChange(e, setDeliveryData, deliveryData)
                    }
                  />
                </div>
              ))}
              <button type="button" onClick={() => handleSave("delivery")}>
                Save
              </button>
              <button type="button" onClick={() => setShowDeliveryModal(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )} */}
      {showDeliveryModal && (
        <DeliveryModal
          show={showDeliveryModal}
          handleClose={() => setShowDeliveryModal(false)}
          handleSave={handleSave}
          deliveryData={deliveryData}
          setDeliveryData={setDeliveryData}
        />
      )}
    </>
  );
}

// Modal styling
const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalStyle = {
  position: "relative",
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "5px",
  width: "300px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
};
