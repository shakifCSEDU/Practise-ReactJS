import { IMG_CDN_URL } from "./constants";
import Title from './Title';

const RestaurantCard = ({
  title,
  image
}) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={image} />
      <h2 className="font-bold 2xl">{title}</h2>
    </div>
  );
};
export default RestaurantCard;