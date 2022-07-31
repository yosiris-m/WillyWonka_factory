import { useEffect, useState } from "react";
import { fetchList } from "../services/api";
import IceCreamListItem from "../components/IceCreamListItem";
import styles from "./List.module.css";
import noResultSearch from "../images/no_result_search.png";
import {
  faSearch,
  faSortAlphaAsc,
  faSortAlphaDesc,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function List() {
  const [iceCreams, setIceCreams] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filterTextSubmitted, setFilterTextSubmitted] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchList(sortOrder, filterTextSubmitted).then((data) =>
      setIceCreams(data)
    );
  }, [sortOrder, filterTextSubmitted]);

  const filterInputOnChange = (e) => {
    setFilterText(e.target.value);
  };

  const filterFormOnSubmit = (e) => {
    e.preventDefault();
    setFilterTextSubmitted(filterText);
  };

  const setAscOrder = () => {
    setSortOrder("asc");
  };

  const setDescOrder = () => {
    setSortOrder("desc");
  };

  return (
    <main className={styles.container}>
      <form onSubmit={filterFormOnSubmit} className={styles.form}>
        <input
          className={styles.filter}
          type="text"
          name="filterInput"
          value={filterText}
          onChange={filterInputOnChange}
        />
        <button type="submit" className={styles.filterSubmit}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <div className={styles.order}>
          {sortOrder === "asc" ? (
            <FontAwesomeIcon icon={faSortAlphaDesc} onClick={setDescOrder} />
          ) : (
            <FontAwesomeIcon icon={faSortAlphaAsc} onClick={setAscOrder} />
          )}
        </div>
      </form>

      <div className={styles.results}>
        {iceCreams.length === 0 && filterTextSubmitted !== "" ? (
          <div className={styles.noResult}>
            <img
              className={styles.imageNoResult}
              src={noResultSearch}
              alt="no result"
            />
            <span>
              Sorry, we didn't found ice creams with text{" "}
              <strong>"{filterTextSubmitted}</strong>
              "...
            </span>
          </div>
        ) : (
          <div className={styles.box}>
            {iceCreams.map((iceCream) => (
              <IceCreamListItem key={iceCream.id} iceCream={iceCream} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
