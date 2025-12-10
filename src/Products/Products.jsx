// src/Pages/Products.jsx və ya haradadırsa
import  { useContext } from "react";
import MainContext from "../Context/Context";

const Products = () => {
  const { products, error } = useContext(MainContext);

  if (error) {
    return <p style={{ color: "red" }}>Xəta: {error}</p>;
  }

  if (!products || products.length === 0) {
    return <p>Məhsul tapılmadı.</p>;
  }

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
