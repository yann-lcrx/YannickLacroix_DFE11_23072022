import styles from "./styles/App.module.scss";
import "./styles/globals.scss";
import AppRouter from "./router";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";

function App() {
  const pathname = useLocation().pathname;
  console.log(pathname);

  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <Link to="/">
            <img src={"/logo.svg"} alt="kasa" />
          </Link>
          <nav>
            <ul>
              <li aria-current={pathname === "/" ? "page" : ""}>
                <Link to="/">Accueil</Link>
              </li>

              <li aria-current={pathname === "/about" ? "page" : ""}>
                <Link to="/about">A Propos</Link>
              </li>
            </ul>
          </nav>
        </header>

        <AppRouter />
      </div>
      <footer className={styles.footer}>
        <img src={"/logowhite.svg"} alt="kasa" />
        <p>@ 2022 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
