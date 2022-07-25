import { Link } from "react-router-dom";
import "../styles/components/StayItem.scss";

function StayItem({ name, cover, id }) {
  return (
    <div className="StayItem">
      <Link to={`/stay?id=${id}`}>
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
