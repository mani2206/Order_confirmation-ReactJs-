import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import Volumetric from "./Volumetric";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import OrderOverview from "../pageComponents/OrderOverview";

export default function AccordionComponent() {
  const {
    handleCategoryClick,
    handleLoadClick,
    handleQuantityClick,
    handleInputChange,
    category,
    setCategory,
    load,
    setLoad,
    inputValue,
    setInputValue,
    submittedQuantity,
    setSubmittedQuantity,
    categories,
    loads,
  } = useContext(DataContext);

  console.log(category, "categoryname");

  return (
    <>  
        <div>
          <Accordion defaultActiveKey="0">
            {/* First Accordion Item */}
            <Accordion.Item eventKey="0">
              <Accordion.Header className="product">
                <p
                  style={{ fontSize: "11px", fontWeight: "bold" }}
                  className="m-0 font-weight-bold"
                >
                  Product Category
                </p>
                <div className="d-flex ms-2 w-50">
                  <input
                    type="text"
                    className="form-control change"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <div className=" button_color">Change</div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="d-flex justify-content-around">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="category-box p-2"
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                      }}
                      onClick={() => handleCategoryClick(category.name)}
                    >
                      <img
                        className="category-img"
                        src={category.img}
                        alt={`${category.name} logo`}
                        style={{ width: "60px" }}
                      />
                      <div style={{ fontSize: "10px", textAlign: "center" }}>
                        {category.name}
                      </div>
                    </div>
                  ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* Second Accordion Item */}
            <Accordion.Item eventKey="1">
              <Accordion.Header className="load">
                <p
                  style={{ fontSize: "11px", fontWeight: "bold" }}
                  className="m-0 font-weight-bold"
                >
                  Select Load Type
                </p>
                <div className="d-flex ms-2 justify-content-end">
                  <input
                    type="text"
                    className="form-control change w-50"
                    value={load}
                    onChange={(e) => setLoad(e.target.value)}
                  />
                  {submittedQuantity && (
                    <input
                      type="text"
                      className="form-control change w-25"
                      value={`${submittedQuantity} quantity`}
                      readOnly
                    />
                  )}

                  <div className=" button_color">Change</div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="d-flex justify-content-around">
                  {loads.map((category, index) => (
                    <div
                      key={index}
                      className="category-box p-2"
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                      }}
                      onClick={() => handleLoadClick(category.name)}
                    >
                      <img
                        className="category-img"
                        src={category.img}
                        alt={`${category.name} logo`}
                        style={{ width: "60px" }}
                      />
                      <div
                        style={{
                          fontSize: "10px",
                          textAlign: "center",
                          padding: "10px 0px 0px 0px",
                        }}
                      >
                        {category.name}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
                  <div className="d-flex ">
                    <div
                      className="m-0"
                      style={{
                        fontSize: "10px",
                        border: "1px solid lightblue",
                        background: "#add8e633",
                        padding: "10px 0 ",
                      }}
                    >
                      Enter Load Quantity
                    </div>
                    <input
                      type="number"
                      value={inputValue}
                      onChange={handleInputChange}
                      placeholder=""
                      className=" w-25"
                    />
                  </div>
                  <button
                    className="changeproceed"
                    onClick={handleQuantityClick}
                    type="submit"
                  >
                    Proceed
                  </button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Volumetric />
          <OrderOverview />
        </div>
    </>
  );
}
