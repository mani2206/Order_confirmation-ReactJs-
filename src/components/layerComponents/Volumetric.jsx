import { useState, useContext } from "react";
import DataContext from "../../context/DataContext";

export default function Volumetric() {
  const {
    volumetric1, setVolumetric1,
    volumetric2, setVolumetric2,
    volumetric3, setVolumetric3,
    actualWeight, setActualWeight,
    invoiceNo, setInvoiceNo,
    addOrder
  } = useContext(DataContext);

  const [showPopup, setShowPopup] = useState(false);

  const handleAddOrder = () => {
    addOrder();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1000); // Hide popup after 2 seconds
  };

  return (
    <>
      <div className="d-flex justify-content-between order">
        <div className="d-flex align-items-center">
          <div style={{ fontSize: "11px" }} className="px-1">Volumetric:</div>
          <input
            type="text"
            value={volumetric1}
            onChange={(e) => setVolumetric1(e.target.value)}
            style={{ width: "50px" }}
          />
          <input
            type="text"
            value={volumetric2}
            onChange={(e) => setVolumetric2(e.target.value)}
            style={{ width: "50px" }}
          />
          <input
            type="text"
            value={volumetric3}
            onChange={(e) => setVolumetric3(e.target.value)}
            style={{ width: "50px" }}
          />
        </div>

        <div className="d-flex align-items-center">
          <div className="px-1" style={{ fontSize: "11px" }}>Actual Weight:</div>
          <input
            type="text"
            value={actualWeight}
            onChange={(e) => setActualWeight(e.target.value)}
            style={{ width: "50px" }}
          />
          <input type="text" readOnly style={{ width: "50px" }} value="Kg" />
        </div>

        <div className="d-flex align-items-center">
          <div className="px-1" style={{ fontSize: "11px" }}>Invoice No:</div>
          <input
            type="text"
            value={invoiceNo}
            onChange={(e) => setInvoiceNo(e.target.value)}
            style={{ width: "50px" }}
          />
        </div>

        <button
          className="btn btn-info"
          style={{ fontSize: "11px" }}
          onClick={handleAddOrder}
        >
          Add Order
        </button>
      </div>

      {showPopup && (
        <div className="alert alert-success mt-2" style={{ fontSize: "12px" }}>
          Your order has been added!
        </div>
      )}
    </>
  );
}
