import { Link, useParams } from "react-router-dom";
import "./Details.module.css";

import { useEffect, useState } from "react";
import { fetchDetails } from "../services/api";
import IceCreamDetails from "../components/IceCreamDetails";
import styles from "./Details.module.css";

export default function Details() {
  const [iceCream, setIceCream] = useState();
  let { id } = useParams();

  useEffect(() => {
    fetchDetails(id).then((data) => setIceCream(data));
  }, []);

  if (!iceCream) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <nav>
        <Link className="linkHome" to="/">
          Home
        </Link>
      </nav>
      <h2 className={styles.subTitle}>Ice cream details </h2>
      <IceCreamDetails iceCream={iceCream} />
    </main>
  );
}
