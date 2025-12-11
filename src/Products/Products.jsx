// src/Pages/Products.jsx və ya haradadırsa
import  { useContext } from "react";
import MainContext from "../Context/Context";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { Navigate } from "react-router-dom";

const Products = () => {
  const { products, error } = useContext(MainContext);
  if (error) return <Error />;
  return (
    <div>
      <h2>Məhsullar</h2>
      {products.map((product,index) => (
        <div key={index} style={{ border: "1px solid #ccc", margin: 8, padding: 8 }}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Qiymət: {product.price}</p>
          <p>Kategoriya: {product.categoryName}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
