import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DropdownSection from "../components/DropdownSection";
import Gallery from "../components/Gallery";
import Tag from "../components/Tag";
import styles from "../styles/pages/Stay.module.scss";

function StayPage() {
  const { stayId } = useParams();
  const [stay, setStay] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("/logements.json")
      .then((res) => res.json())
      .then((staysData) => {
        const matchingStay = staysData.find((stay) => stay.id === stayId);
        setStay(matchingStay);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main className={styles.Stay}>
      {isLoading ? (
        <p>Chargement</p>
      ) : (
        stay && (
          <section>
            <Gallery pictures={stay.pictures} />
            <div>
              <div className={styles.mainDetails}>
                <div className={styles.leftSection}>
                  <div>
                    <h1>{stay.title}</h1>
                    <p>{stay.location}</p>
                  </div>
                  <ul>
                    {stay.tags && stay.tags.map((tag) => <Tag content={tag} />)}
                  </ul>
                </div>
                <div className={styles.rightSection}>
                  <div className={styles.host}>
                    <p>{stay.host.name}</p>
                    <img src={stay.host.picture} alt={stay.host.name} />
                  </div>
                  <div className={styles.rating}>
                    {[...Array(5)].map((star, index) =>
                      parseInt(stay.rating) >= index + 1 ? (
                        <img alt="étoile" src="/star.svg" key={index} />
                      ) : (
                        <img
                          alt="étoile grisée"
                          src="/dullstar.svg"
                          key={index}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bottomSection}>
              <DropdownSection
                title="Description"
                content={<p>{stay.description}</p>}
              />
              <DropdownSection
                title="Equipements"
                content={
                  <ul>
                    {stay.equipments.map((equipment) => (
                      <li key={equipment}>{equipment}</li>
                    ))}
                  </ul>
                }
              />
            </div>
          </section>
        )
      )}
    </main>
  );
}

export default StayPage;
