import { Link } from "react-router-dom";
import styles from "./IceCreamListItem.module.css";

export default function IceCreamListItem({ iceCream }) {
  return (
    <div>
      <Link to={`/details/${iceCream.id}`} className={styles.container}>
        <img
          className={styles.photo}
          src={iceCream.pictureUrl}
          alt="Ice cream picture"
        />
        <strong>{iceCream.flavor}</strong>
      </Link>
    </div>
  );
}
