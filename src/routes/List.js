import { useEffect, useState } from "react";
import { fetchList } from "../services/api";
import IceCreamListItem from "../components/IceCreamListItem";
import styles from "./List.module.css";

export default function List() {
  const [iceCreams, setIceCreams] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const loadIceCreams = () => {
    fetchList(sortOrder, filterText).then((data) => setIceCreams(data));
  };

  useEffect(() => {
    loadIceCreams();
  }, [sortOrder]);

  const filterInputOnChange = (e) => {
    setFilterText(e.target.value);
  };

  const filterFormOnSubmit = (e) => {
    e.preventDefault();
    loadIceCreams();
  };

  const sortOrderOnChange = (e) => {
    setSortOrder(e.target.value);
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
      <div>
        <select onChange={sortOrderOnChange}>
          <option value="asc">Ascending order (A -> Z)</option>
          <option value="desc">Descending order (Z -> A)</option>
        </select>
      </div>
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
