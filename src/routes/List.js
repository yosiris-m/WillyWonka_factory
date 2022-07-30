import { useEffect, useState } from "react";
import { fetchList } from "../services/api";
import IceCreamListItem from "../components/IceCreamListItem";

export default function List() {
  const [iceCreams, setIceCreams] = useState([]);

  useEffect(() => {
    fetchList().then((data) => setIceCreams(data));
  }, []);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>List</h2>

      {iceCreams.map((iceCream) => (
        <IceCreamListItem key={iceCream.id} iceCream={iceCream} />
      ))}
    </main>
  );
}
