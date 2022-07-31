import { Link } from "react-router-dom";
import styles from "./IceCreamListItem.module.css";
import missingImage from "../images/missing_image.jpg";

export default function IceCreamListItem({ iceCream }) {
  return (
    <Link to={`/details/${iceCream.id}`} className={styles.container}>
      <img
        className={styles.picture}
        src={iceCream.pictureUrl}
        alt="Ice cream picture"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = missingImage;
        }}
      />
      <strong className={styles.flavor}>{iceCream.flavor}</strong>
    </Link>
  );
}
