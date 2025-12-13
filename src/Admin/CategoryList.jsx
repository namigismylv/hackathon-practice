import { useContext } from "react";
import MainContext from "../Context/Context";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";

const CategoryList = () => {
  const { categories,error} = useContext(MainContext);
  if (error) return <Error />;
  return (
    <ul>
      {categories.map((c,index) => {
        return <li key={index}>{c.name}</li>;
      })}
    </ul>
  );
};

export default CategoryList;
