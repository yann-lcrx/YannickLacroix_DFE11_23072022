import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import StayItem from "../components/StayItem";
import styles from "../styles/pages/Home.module.scss";

function HomePage() {
  const [stays, setStays] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("/logements.json")
      .then((res) => res.json())
      .then((staysData) => {
        setStays(staysData);
        setError("");
        setIsLoading(false);
      })
      .catch((err) =>
        setError(`Erreur lors de la récupération des données: ${err.message}`)
      );
  }, []);

  return (
    <main className={styles.Home}>
      <Hero text="Chez vous, partout et ailleurs" />
      {!error.length ? (
        <div className={styles.staysList}>
          {isLoading ? (
            <p>Chargement...</p>
          ) : (
            stays.map((stay) => (
              <StayItem
                name={stay.title}
                id={stay.id}
                cover={stay.cover}
                key={stay.id}
              />
            ))
          )}
        </div>
      ) : (
        <p className={styles.error}>{error}</p>
      )}
    </main>
  );
}

export default HomePage;
