import { useContext } from "react";
import  MainContext  from "../Context/Context";

const CategoryList = () => {
  const { categories } = useContext(MainContext);

 

  return (
  <ul>
      {categories.map((c) => (
        <li key={c.id}>{c.name}</li>
      ))}
    </ul>
  );
};

export default CategoryList;
