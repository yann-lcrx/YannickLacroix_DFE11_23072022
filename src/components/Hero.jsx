import styles from "../styles/components/Hero.module.scss";

/**
 * Hero component to display on top of page. Optionally takes a text as props.
 * @param {{text: string, picture: string, mobileHeight: string}} props
 * @returns JSX
 */
function Hero({ text, picture, mobileHeight }) {
  return (
    <div
      className={
        mobileHeight === "small"
          ? `${styles.Hero} ${styles.mobileHeightSmall}`
          : styles.Hero
      }
      style={{ backgroundImage: `url(${picture})` }}
    >
      {text.length > 0 && <h1>{text}</h1>}
    </div>
  );
}

export default Hero;
