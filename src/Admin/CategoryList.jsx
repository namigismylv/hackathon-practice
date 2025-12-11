import { useContext } from "react";
import MainContext from "../Context/Context";

const CategoryList = () => {
  const { categories } = useContext(MainContext);

  return (
    <ul>
      {categories.map((c,index) => {
        return <li key={index}>{c.name}</li>;
      })}
    </ul>
  );
};

export default CategoryList;
