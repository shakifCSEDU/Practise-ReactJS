import { useState ,useEffect} from "react";

const useRestaurant = (resId) => {
  const [restaurant,setRestaurant] = useState(null);

  // get data from API

useEffect(()=>{
    getRestaurantInfo();
  },[]);

  async function getRestaurantInfo(){
    const data = await fetch("https://api.spoonacular.com/recipes/"+id+"/ingredientWidget.json?apiKey=59f95182aff04356b2f1a3bc6edc9ebb");
    const json =await data.json();
    setRestaurant(json);
    console.log(json.ingredients);
  }

  // return restaurant data
  return restaurant; 
};
export default useRestaurant;