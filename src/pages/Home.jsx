import { useState, useEffect } from "react";
import StayItem from "../components/StayItem";
import "../styles/pages/Home.scss";

function HomePage() {
  const [stays, setStays] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("logements.json")
      .then((res) => res.json())
      .then((staysData) => {
        setStays(staysData);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="Home">
      <div>Chez vous, partout et ailleurs</div>

      <div className="staysList">
        {isLoading ? (
          <p>Chargement...</p>
        ) : (
          stays.map((stay) => (
            <StayItem name={stay.title} id={stay.id} cover={stay.cover} />
          ))
        )}
      </div>
    </main>
  );
}

export default HomePage;
