import { useContext } from "react";
import { IMG_CDN_URL } from "./constants";
import Title from './Title';
import UserContext from "../../utils/UserContext";

const RestaurantCard = ({
  title,
  image
}) => {

  const {user} = useContext(UserContext);


  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={image} />
      <h2 className="font-bold 2xl">{title}</h2>
      <h4 className="font-bold">{user.name}</h4>
      <h4 className="font-bold">{user.email}</h4>
    </div>
  );
};
export default RestaurantCard;