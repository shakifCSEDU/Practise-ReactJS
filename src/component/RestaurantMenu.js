import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [res,setRes] = useState([]);

  useEffect(()=>{
    getRestaurantInfo();
  },[]);

  async function getRestaurantInfo(){
    const data = await fetch("https://api.spoonacular.com/recipes/"+id+"/ingredientWidget.json?apiKey=59f95182aff04356b2f1a3bc6edc9ebb");
    const json =await data.json();
    setRes(json);
    console.log(json.ingredients);
  }


  return res.length ===0?<Shimmer/>:(
    <div>
      
        <h1>{res.ingredients[0].name}</h1>
        <img src={res.ingredients[0].image}/>
        
    </div>
)

}
export default RestaurantMenu;
