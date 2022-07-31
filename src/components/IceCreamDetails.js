import styles from "./IceCreamDetail.module.css";

export default function IceCreamDetails({ iceCream }) {
  return (
    <div className={styles.detail}>
      <img className={styles.photo} src={iceCream.pictureUrl} alt="Ice cream" />
      <strong>{iceCream.flavor}</strong>
      <p>{iceCream.description}</p>
    </div>
  );
}
