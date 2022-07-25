import "./styles/App.scss";
import "./styles/globals.scss";
import AppRouter from "./router";
import { BrowserRouter, Link } from "react-router-dom";
import logo from "./images/logo.svg";
import whiteLogo from "./images/logo-white.svg";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App__wrapper">
          <header>
            <Link to="/">
              <img src={logo} alt="kasa" />
            </Link>
            <nav>
              <ul>
                <Link to="/">
                  <li>Accueil</li>
                </Link>
                <Link to="/about">
                  <li>A Propos</li>
                </Link>
              </ul>
            </nav>
          </header>

          <AppRouter />
        </div>
        <footer>
          <img src={whiteLogo} alt="kasa" />
          <p>@ 2022 Kasa. All rights reserved</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
