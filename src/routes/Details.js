import { Link, useParams } from "react-router-dom";
import styles from "./Details.module.css";

import { useEffect, useState } from "react";
import { fetchDetails } from "../services/api";
import IceCreamDetails from "../components/IceCreamDetails";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Details() {
  const [iceCream, setIceCream] = useState();
  let { id } = useParams();

  useEffect(() => {
    fetchDetails(id).then((data) => setIceCream(data));
  }, []);

  return (
    <section className={styles.section}>
      <nav className={styles.navBar}>
        <Link className={styles.linkHome} to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </nav>
      {iceCream ? (
        <IceCreamDetails iceCream={iceCream} />
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
}
