import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

import { useEffect, useState } from "react";
import axios from "axios";
import MainContext from "./Context/Context";

const BASE_URL = "http://13.61.183.66:5000/api";

function App() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/Categories`);

      if (Array.isArray(res.data)) {
        setCategories(res.data);
      } else if (Array.isArray(res.data.data)) {
        setCategories(res.data.data);
      } else {
        setCategories([]);
      }
    } catch (error) {
      console.error("cat error", error);
      setCategories([]);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <MainContext.Provider value={{ categories }}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
}

export default App;
