import { IMG_CDN_URL } from "./constants";
import Title from './Title';

const RestaurantCard = ({
  title,
  image
}) => {
  return (
    <div className="card">
      <img src={image} />
      <h2>{title}</h2>
    </div>
  );
};
export default RestaurantCard;