import { NavLink } from "react-router-dom";
import "./BottomNav.css";

const navItems = [
  {
    path: "/",
    label: "Home",
    icon: "⌂",
    end: true,
  },
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: "▦",
  },
  {
    path: "/government-services",
    label: "সরকারি সেবা",
    icon: "▤",
  },
  {
    path: "/emergency",
    label: "Emergency",
    icon: "!",
    emergency: true,
  },
];

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-inner">

        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              `bottom-nav-item ${
                isActive ? "active" : ""
              } ${item.emergency ? "emergency" : ""}`
            }
          >
            <span className="bottom-nav-icon">
              {item.icon}
            </span>

            <span className="bottom-nav-label">
              {item.label}
            </span>
          </NavLink>
        ))}

        <button
          type="button"
          className="bottom-nav-item menu-nav-item"
          onClick={() => {
            window.dispatchEvent(new Event("open-mobile-menu"));
          }}
        >
          <span className="bottom-nav-icon">☰</span>

          <span className="bottom-nav-label">
            Menu
          </span>
        </button>

      </div>
    </nav>
  );
}

export default BottomNav;
