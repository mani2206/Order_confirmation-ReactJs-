import React, { useContext, useState } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DataContext from "../../context/DataContext";

const OrderOverview = () => {
  const { orders, setOrders } = useContext(DataContext);
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [editableOrder, setEditableOrder] = useState({});
  console.log(editableOrder,"editableOrder");
  

  const handleEdit = (order) => {
    setEditingOrderId(order.id);
    setEditableOrder({ ...order });
  };

  const handleSave = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id
        ? { ...order, ...editableOrder, volumetric: [...editableOrder.volumetric] }
        : order
    );
    setOrders(updatedOrders);
    setEditingOrderId(null);
  };
  

  const handleInputChange = (e, field) => {
    setEditableOrder((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleDelete = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h6>Order Overview</h6>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th style={{ fontSize: "8px" }}>No</th>
            <th style={{ fontSize: "8px" }}>Invoice NO</th>
            <th style={{ fontSize: "8px" }}>Load Type</th>
            <th style={{ fontSize: "8px" }}>Load Quantity</th>
            <th style={{ fontSize: "8px" }}>Actual Weight</th>
            <th style={{ fontSize: "8px" }}>Product Category</th>
            <th style={{ fontSize: "8px" }}>Volumetric</th>
            <th style={{ fontSize: "8px" }}>HAZMAT Class</th>
            <th style={{ fontSize: "8px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
        {orders.map((order, index) => (
            <tr key={order.id}>
              <td style={{ fontSize: "8px" }}>{index + 1}</td>
              {["invoiceNo", "loadType", "loadQuantity", "actualWeight", "productCategory",].map((field) => (
                <td key={field} style={{ fontSize: "8px" }}>
                  {editingOrderId === order.id ? (
                    <input
                      type="text"
                      value={editableOrder[field]}
                      onChange={(e) => handleInputChange(e, field)}
                      style={{ fontSize: "8px", width: "100%" }}
                    />
                  ) : (
                    order[field]
                  )}
                </td>
              ))}

             {/* Volumetric values in Volumetric column */}
             <td style={{ fontSize: "8px" }}>
                {editingOrderId === order.id ? (
                  editableOrder.volumetric.map((value, idx) => (
                    <input
                      key={idx}
                      type="text"
                      value={value}
                      onChange={(e) => {
                        const updatedVolumetric = [...editableOrder.volumetric];
                        updatedVolumetric[idx] = e.target.value;
                        setEditableOrder((prev) => ({ ...prev, volumetric: updatedVolumetric }));
                      }}
                      style={{ fontSize: "8px", width: "30%" }}
                    />
                  ))
                ) : (
                  order.volumetric.join(", ")
                )}
              </td>

              {/* HAZMAT Class in HAZMAT Class column */}
              <td style={{ fontSize: "8px" }}>
                {editingOrderId === order.id ? (
                  <input
                    type="text"
                    value={editableOrder.hazmatClass}
                    onChange={(e) => handleInputChange(e, "hazmatClass")}
                    style={{ fontSize: "8px", width: "100%" }}
                  />
                ) : (
                  order.hazmatClass
                )}
              </td>
              <td className="d-flex">
                {editingOrderId === order.id ? (
                  <button onClick={() => handleSave(order.id)} className="btn btn-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      fill="currentColor"
                      className="bi bi-save"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.5 1v6H6V1H1v14h14V5h-5V1H7.5zM14 14H2V2h3v4h3V2h3v3h4v9z"/>
                      <path d="M4 4.5v1h2v-1H4zm1 1.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                  </button>
                ) : (
                  <button onClick={() => handleEdit(order)} className="btn btn-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      fill="currentColor"
                      className="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                      <path
                        fillRule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                      />
                    </svg>
                  </button>
                )}
                <button onClick={() => handleDelete(order.id)} className="btn btn-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    fill="currentColor"
                    className="bi bi-trash3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderOverview;
