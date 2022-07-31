import { useEffect, useState } from "react";
import { fetchList } from "../services/api";
import IceCreamListItem from "../components/IceCreamListItem";
import styles from "./List.module.css";
import noResultSearch from "../images/no_result_search.png";

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
    <main className={styles.container}>
      <form onSubmit={filterFormOnSubmit} className={styles.form}>
        <label htmlFor="filterInput">
          Filter:
          <input
            className={styles.filter}
            type="text"
            name="filterInput"
            value={filterText}
            onChange={filterInputOnChange}
          />
        </label>
        <button type="submit">Search</button>
        <div className={styles.order}>
          <span> Order by :</span>
          <select onChange={sortOrderOnChange} className={styles.orderSelect}>
            <option value="asc">Ascending order (A -> Z)</option>
            <option value="desc">Descending order (Z -> A)</option>
          </select>
        </div>
      </form>

      <div className={styles.box}>
        {iceCreams.length === 0 ? (
          <div className={styles.noResult}>
            <span>No results search...</span>
            <img
              className={styles.imageNoResult}
              src={noResultSearch}
              alt="no result picture"
            />
          </div>
        ) : (
          iceCreams.map((iceCream) => (
            <IceCreamListItem key={iceCream.id} iceCream={iceCream} />
          ))
        )}
      </div>
    </main>
  );
}
