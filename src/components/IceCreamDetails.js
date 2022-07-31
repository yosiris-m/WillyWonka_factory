import styles from "./IceCreamDetail.module.css";
import { addToFavorites, removeFromFavorites } from "../services/localStorage";
import { useState } from "react";
import {
  faHeartCircleMinus,
  faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IceCreamDetails({ iceCream }) {
  const [isFavorite, setIsFavorite] = useState(iceCream.isFavorite);

  const handleAddFavorite = () => {
    addToFavorites(iceCream.id);
    setIsFavorite(true);
  };

  const handleRemoveFavorite = () => {
    removeFromFavorites(iceCream.id);
    setIsFavorite(false);
  };

  return (
    <div className={styles.detail}>
      {isFavorite ? (
        <FontAwesomeIcon
          icon={faHeartCircleMinus}
          className={styles.removeFavorite}
          onClick={handleRemoveFavorite}
        />
      ) : (
        <FontAwesomeIcon
          icon={faHeartCirclePlus}
          className={styles.addFavorite}
          onClick={handleAddFavorite}
        />
      )}

      <img
        className={styles.picture}
        src={iceCream.pictureUrl}
        alt="Ice cream picture"
      />
      <strong>{iceCream.flavor}</strong>
      <p>{iceCream.description}</p>
    </div>
  );
}
