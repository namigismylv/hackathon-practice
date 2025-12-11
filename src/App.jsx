import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

import MainContext from "./Context/Context";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../src/BASE_URL";
import Loading from "./Loading/Loading";
import Error from "./Error/Error";
// import { useMemo, useState } from "react";

function App() {
  // const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const axiosData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const responses = await axios.all([
          axios.get(`${BASE_URL}/products`),
          axios.get(`${BASE_URL}/Categories`),
        ]);
        const [resProducts, resCategories] = responses;
        setProducts(resProducts.data.data);
        setCategories(resCategories.data.data);
        console.log(resCategories.data.data);
        console.log(resProducts.data.data);
      } catch (error) {
        console.log("Fetching Problem", error);
        setError("melumatlar yuklenmedi");
      } finally {
        setLoading(false);
      }
    };
    axiosData();
  }, []);
  if (loading) return <Loading />;
  const contextData = {
    products,
    setProducts,
    error,
    setError,
    loading,
    categories,
    setCategories,
  };

  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
}

export default App;
