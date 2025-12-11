// src/App.jsx
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import MainContext from "./Context/Context";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../src/BASE_URL";
// import { useMemo, useState } from "react";

function App() {
  // const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const axiosData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const responses = await axios.all([axios.get(`${BASE_URL}/products`)]);
        const [resProducts] = responses;
        setProducts(resProducts.data.data);
        console.log(resProducts.data.data);
      } catch (error) {
        console.log("Fetching Problem", error);
      } finally {
        setLoading(false)
      }
  
    };
    axiosData();
  }, []);
  const contextData = {
    products,
    setProducts,
    error,
    loading,
    setError,
  };
  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
}

export default App;
