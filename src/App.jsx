// src/App.jsx
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import MainContext from "./Context/Context";
// import { useMemo, useState } from "react";

function App() {
  // const [user, setUser] = useState(null);

  const contextData = {

  };
  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
}

export default App;
