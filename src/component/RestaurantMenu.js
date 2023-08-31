import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../../utils/useRestaurant";
const RestaurantMenu = () => {
  const { id } = useParams();
  

  const restaurant = useRestaurant(id);


  return res.length ===0?<Shimmer/>:(
    <div>
      
        <h1>{restaurant.ingredients[0].name}</h1>
        <img src={restaurant.ingredients[0].image}/>
        
    </div>
)

}
export default RestaurantMenu;
