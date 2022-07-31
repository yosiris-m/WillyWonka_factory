import styles from "./IceCreamDetail.module.css";

export default function IceCreamDetails({ iceCream }) {
  return (
    <div className={styles.detail}>
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
