import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./constants";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  return restaurants?.filter((restaurant) =>
    restaurant?.title?.toLowerCase()?.includes(searchText.toLowerCase())
  );
}

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
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=08e11627ade946c18fc38b1918578d2f"
    );
    const json = await data.json();

    setAllRestaurants(json?.results);
    setFilteredRestaurants(json?.results);
  }

  // not render component(Early return)
  if(!allRestaurants)return null;

  if(filteredRestaurants?.length == 0)return <h1>No Restaurant found!</h1>;
  

  // Condiitional Rendering...

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
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
      <div className="restaurant-list">
        {filteredRestaurants?.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant.id} />
        ))}
      </div>
    </>
  );
};
export default Body;
