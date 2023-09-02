import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./constants";
import Shimmer from "./Shimmer";
import RestaurantMenu from "./RestaurantMenu";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper";
import useOnline from "../../utils/useOnline";


const Body = () => {


  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants,setFilteredRestaurants] = useState([]);



  // empty dependency array => once after render
  useEffect(() => {
    // API Call here
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=59f95182aff04356b2f1a3bc6edc9ebb"
    );
    const json = await data.json();

    setAllRestaurants(json?.results);
    setFilteredRestaurants(json?.results);
  }

  const isOnline = useOnline();

  if(!isOnline){
    return (<h1>🔴Offline,Please check your internet connection!! </h1>);
  }


  // not render component(Early return)
  if(!allRestaurants)return null;

  //if(filteredRestaurants?.length == 0)return <h1>No Restaurant found!</h1>;


  // Condiitional Rendering...

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-green-500 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="p-5 m-2 bg-purple-800 hover:bg-gray-500 text-white rounded-md"
          onClick={(e) => {
            // need to filter-out this data
            //update the state-restaurants
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => (
          <Link to={"/restaurant/"+restaurant.id}>
            <RestaurantCard {...restaurant} key={restaurant.id} />
          </Link>
        ))}
      </div>
    </>
  );
};
export default Body;
