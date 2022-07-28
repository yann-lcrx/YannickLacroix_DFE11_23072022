import styles from "./styles/App.module.scss";
import "./styles/globals.scss";
import AppRouter from "./router";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <Link to="/">
              <img src={"/logo.svg"} alt="kasa" />
            </Link>
            <nav>
              <ul>
                <li>
                  <Link to="/">Accueil</Link>
                </li>

                <li>
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
    </BrowserRouter>
  );
}

export default App;
