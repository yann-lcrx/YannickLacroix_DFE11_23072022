import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import StayItem from "../components/StayItem";
import styles from "../styles/pages/Home.module.scss";

function HomePage() {
  const [stays, setStays] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("/logements.json")
      .then((res) => res.json())
      .then((staysData) => {
        setStays(staysData);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className={styles.Home}>
      <Hero text="Chez vous, partout et ailleurs" />

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
    </main>
  );
}

export default HomePage;
