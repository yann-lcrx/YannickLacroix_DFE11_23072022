import DropdownSection from "../components/DropdownSection";
import styles from "../styles/pages/About.module.scss";

function AboutPage() {
  return (
    <main className={styles.About}>
      <DropdownSection
        title="Fiabilité"
        content={
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        }
      />
      <DropdownSection
        title="Respect"
        content={
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        }
      />
      <DropdownSection
        title="Section"
        content={
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        }
      />
      <DropdownSection
        title="Sécurité"
        content={
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        }
      />
    </main>
  );
}

export default AboutPage;
