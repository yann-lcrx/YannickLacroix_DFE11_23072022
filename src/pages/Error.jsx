import { Link } from "react-router-dom";
import "../styles/pages/Error.scss";

function ErrorPage() {
  return (
    <main className="Error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </main>
  );
}

export default ErrorPage;
