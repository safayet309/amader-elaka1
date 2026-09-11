import { Link } from "react-router-dom";
import "./ServiceCard.css";

function ServiceCard({
  icon,
  title,
  description,
  path = "#",
  variant = "default",
}) {
  return (
    <Link
      to={path}
      className={`service-card service-card-${variant}`}
    >
      <div className="service-card-icon">
        {icon}
      </div>

      <div className="service-card-content">
        <h3>{title}</h3>

        {description && (
          <p>{description}</p>
        )}
      </div>

      <span className="service-card-arrow">
        →
      </span>
    </Link>
  );
}

export default ServiceCard;
