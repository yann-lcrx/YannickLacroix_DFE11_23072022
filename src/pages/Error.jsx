import { Link } from "react-router-dom";
import styles from "../styles/pages/Error.module.scss";

function ErrorPage() {
  return (
    <main className={styles.Error}>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </main>
  );
}

export default ErrorPage;
