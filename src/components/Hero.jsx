import styles from "../styles/components/Hero.module.scss";

/**
 * Hero component to display on top of page. Optionally takes a text as props.
 * @param {{text: string, picture: string}} props
 * @returns JSX
 */
function Hero({ text, picture }) {
  return (
    <div className={styles.Hero} style={{ backgroundImage: `url(${picture})` }}>
      {text.length && <h1>{text}</h1>}
    </div>
  );
}

export default Hero;
