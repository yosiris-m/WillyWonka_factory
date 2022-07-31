import styles from "./App.module.css";
import { Outlet } from "react-router-dom";
import logo from "./images/logo.png";

function App() {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="Web page logo" />
        <h1>Willy Wonka Ice Creams</h1>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default App;
