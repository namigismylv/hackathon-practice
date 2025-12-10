import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

import { useEffect, useState } from "react";
import axios from "axios";
import MainContext from "./Context/Context";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../public/BASE_URL";
// import { useMemo, useState } from "react";

function App() {
  // const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const axiosData = async () => {
      try{
        const responses = await axios.all([
          axios.get(`${BASE_URL}/products`)
        ]);
        const [resProducts] = responses
        setProducts(resProducts.data.data)
        console.log(resProducts.data.data)
      }
      catch (error){
        console.log("Fetching Problem",error)
      }
    };
    axiosData()
  }, []);
  const contextData = {
    products,
    setProducts,
    error,
    setError
  };


  return (
    <MainContext.Provider value={{ categories }}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
}

export default App;
