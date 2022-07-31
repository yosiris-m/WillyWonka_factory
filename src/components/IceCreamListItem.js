import { Link } from "react-router-dom";
import styles from "./IceCreamListItem.module.css";
import missingImage from "../images/missing_image.jpg";

export default function IceCreamListItem({ iceCream }) {
  return (
    <div>
      <Link to={`/details/${iceCream.id}`} className={styles.container}>
        <img
          className={styles.photo}
          src={iceCream.pictureUrl}
          alt="Ice cream picture"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = missingImage;
          }}
        />
        <strong>{iceCream.flavor}</strong>
      </Link>
    </div>
  );
}
