import React from "react";

import OrderManage from "../layerComponents/OrderManage";

export default function OrderPage() {
  return (
    <>
      <div className="d-flex justify-content-between p-2 bg-light">
        <p className="m-0 text-gray" style={{fontSize:"10px" }}>Order ManageMent system</p>
        <p className="m-0 text-gray"  style={{fontSize:"10px"}}>Welcome Guest</p>
      </div>
      <OrderManage />
    </>
  );
}

