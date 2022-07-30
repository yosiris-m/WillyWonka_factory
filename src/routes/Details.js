import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { fetchDetails } from "../services/api";
import IceCreamDetails from "../components/IceCreamDetails";

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
    <main style={{ padding: "1rem 0" }}>
      <h2>Details</h2>
      <IceCreamDetails iceCream={iceCream} />
    </main>
  );
}
