import styles from "./App.module.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Willy Wonka Ice Creams</h1>
      </header>
      <Outlet />
    </>
  );
}

export default App;
