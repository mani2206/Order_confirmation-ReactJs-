import { createContext, useState, useEffect } from "react";
import images from "../images.json";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const categories = images.categories;
  const loads = images.load;
  const [orders, setOrders] = useState([]);
  const [volumetric1, setVolumetric1] = useState("");
  const [volumetric2, setVolumetric2] = useState("");
  const [volumetric3, setVolumetric3] = useState("");
  const [actualWeight, setActualWeight] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [category, setCategory] = useState("");
  const [load, setLoad] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [submittedQuantity, setSubmittedQuantity] = useState("");

  // const handleAddOrder = () => {
  //   console.log({
  //     volumetric1,
  //     volumetric2,
  //     volumetric3,
  //     actualWeight,
  //     invoiceNo,
  //   });
  // };

  const handleCategoryClick = (categoryName) => {
    console.log(categoryName);
    setCategory(categoryName);
  };

  const handleLoadClick =(loadname)=> {
    console.log(loadname);
    setLoad(loadname);
  };
  const handleQuantityClick = () => {
    setSubmittedQuantity(inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const volumetricValues = [volumetric1, volumetric2, volumetric3];
  const addOrder = () => {
    const newOrder = {
      id: orders.length + 1,
      invoiceNo: `INV${orders.length + 1}`,
      loadType: load,
      loadQuantity: submittedQuantity,
      actualWeight: actualWeight,
      volumetric:volumetricValues,
      productCategory: category,
      hazmatClass: "No",
    };
    console.log(newOrder,"newOrder")
    setOrders([...orders, newOrder]);

    setCategory("")
    setLoad("")
    setInputValue("")
    setSubmittedQuantity("")
    setVolumetric1("")
    setVolumetric2("")
    setVolumetric3("")
    setActualWeight("")
    setInvoiceNo("")
  };
  return (
    <DataContext.Provider
      value={{
        volumetric1,
        setVolumetric1,
        volumetric2,
        setVolumetric2,
        volumetric3,
        setVolumetric3,
        actualWeight,
        setActualWeight,
        invoiceNo,
        setInvoiceNo,
        handleLoadClick,
        handleQuantityClick,
        handleInputChange,
        handleCategoryClick ,
        categories,
        loads,
        load,
        category,
        submittedQuantity,
        addOrder,
        orders,
        setOrders

      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
