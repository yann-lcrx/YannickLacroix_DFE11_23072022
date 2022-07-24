import "./App.css";
import AppRouter from "./router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">Header</header>

        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
