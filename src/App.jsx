import Navbar from "./components/pageComponents/Navbar";
import OrderPage from "./components/pageComponents/OrderPage";
import "./App.css";
import useWindowSize from "./hooks/useWindowSize";
import { DataProvider } from "./context/DataContext";

function App() {
  const { width } = useWindowSize();
  return (
    <>
      <DataProvider>
         <Navbar />
         <OrderPage/>
      </DataProvider>
    </>
  );
}

export default App;
