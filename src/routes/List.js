import { useEffect, useState } from "react";
import { fetchList } from "../services/api";
import IceCreamListItem from "../components/IceCreamListItem";
import styles from "./List.module.css";

export default function List() {
  const [iceCreams, setIceCreams] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    fetchList().then((data) => setIceCreams(data));
  }, []);

  const filterInputOnChange = (e) => {
    const newFilterText = e.target.value;
    setFilterText(newFilterText);
  };

  const filterFormOnSubmit = (e) => {
    e.preventDefault();
    fetchList(filterText).then((data) => setIceCreams(data));
  };

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2 className={styles.subTitle}>List</h2>
      <form onSubmit={filterFormOnSubmit}>
        <label htmlFor="filterInput">Filter:</label>
        <input
          type="text"
          name="filterInput"
          value={filterText}
          onChange={filterInputOnChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className={styles.box}>
        {iceCreams.length === 0 ? (
          <span>No results...</span>
        ) : (
          iceCreams.map((iceCream) => (
            <IceCreamListItem key={iceCream.id} iceCream={iceCream} />
          ))
        )}
      </div>
    </main>
  );
}
