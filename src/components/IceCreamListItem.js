import { Link } from "react-router-dom";

export default function IceCreamListItem({ iceCream }) {
  return (
    <div>
      <Link to={`/details/${iceCream.id}`}>
        <img src={iceCream.pictureUrl} />
        <strong>{iceCream.flavor}</strong>
      </Link>
    </div>
  );
}
