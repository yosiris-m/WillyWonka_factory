import { useEffect, useState } from "react";
import { fetchList } from "../services/api";
import IceCreamListItem from "../components/IceCreamListItem";
import styles from "./List.module.css";

export default function List() {
  const [iceCreams, setIceCreams] = useState([]);

  useEffect(() => {
    fetchList().then((data) => setIceCreams(data));
  }, []);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2 className={styles.subTitle}>List</h2>
      <div className={styles.box}>
        {iceCreams.map((iceCream) => (
          <IceCreamListItem key={iceCream.id} iceCream={iceCream} />
        ))}
      </div>
    </main>
  );
}
