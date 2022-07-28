import { Link } from "react-router-dom";
import styles from "../styles/components/StayItem.module.scss";

/**
 * preview item card for a stay
 * @param {{name: string, cover: string, id: string}} props
 * @returns JSX
 */
function StayItem({ name, cover, id }) {
  return (
    <div className={styles.StayItem}>
      <Link to={`/stay/${id}`}>
        <article
          tabIndex={0}
          style={{
            backgroundImage: `url(${cover}), linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%`,
          }}
        >
          <h2>{name}</h2>
        </article>
      </Link>
    </div>
  );
}

export default StayItem;
