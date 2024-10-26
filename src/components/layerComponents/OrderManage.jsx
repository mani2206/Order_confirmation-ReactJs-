import React from "react";
import Accordion from "./Accordian";
import PayementSummary from "../pageComponents/PayementSummary";

function OrderManage() {
  return (
    <>
    <div className="d-md-flex justify-content-between">
    <aside className="shadow">
        <div className="d-flex justify-content-between px-2 m-3">
          <h6 className="m-0" style={{fontSize:"11px"}}>Order Management</h6>
          <p className="m-0 order_border" >
            New Order
            <span className="mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="currentColor"
                className="bi bi-file-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5z" />
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
              </svg>
            </span>
          </p>
        </div>
        <Accordion />
      </aside>
      <div className="payment">
        <PayementSummary />
      </div>
    </div>
      
    
    </>
  );
}

export default OrderManage;
