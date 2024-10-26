import React from "react";

export default function PaymentDetails() {
  const charges = {
    shipmentAmount: 10,
    baseFreightAmount: 15,
    accessorialFridgeAmount: 5,
    docketCharge: 2,
    stationaryCharge: 3,
    "chargeHandle (per box)": 11,
    "cgst (8%)": 100,
    "sgst (8%)": 100,
    "igst (8%)": 100,
  };

  const totalAmount = Object.values(charges).reduce((acc, value) => acc + value, 0);

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
        <tbody>
          <tr>
            <td style={tableCellStyle}>Total Shipment Amount</td>
            <td style={tableCellStyle}>${charges.shipmentAmount}</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>Base Freight Amount</td>
            <td style={tableCellStyle}>${charges.baseFreightAmount}</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>Accessorial Fridge Amount</td>
            <td style={tableCellStyle}>${charges.accessorialFridgeAmount}</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>Docket Charge</td>
            <td style={tableCellStyle}>${charges.docketCharge}</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>Stationary Charge</td>
            <td style={tableCellStyle}>${charges.stationaryCharge}</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>Charge Handle (per box)</td>
            <td style={tableCellStyle}>${charges["chargeHandle (per box)"]}</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>CGST (8%)</td>
            <td style={tableCellStyle}>${charges["cgst (8%)"]}</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>SGST (8%)</td>
            <td style={tableCellStyle}>${charges["sgst (8%)"]}</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>IGST (8%)</td>
            <td style={tableCellStyle}>${charges["igst (8%)"]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const tableHeaderStyle = {
  borderBottom: "1px solid #ddd",
  padding: "8px",
  fontSize: "14px",
  fontWeight: "bold",
};

const tableCellStyle = {
  borderBottom: "1px solid #ddd",
  padding: "8px",
  fontSize: "13px",
};
