import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./constants";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);

  // empty dependency array => once after render
  useEffect(() => {
    // API Call here
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=08e11627ade946c18fc38b1918578d2f");
    const json = await data.json();
    
    setAllRestaurants(json.results);
    console.log(json.results);
  }
  

  return (
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
            setAllRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
      
      {
      allRestaurants?.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant.id} />
        ))}
      </div>
    </>
  );
};
export default Body;
