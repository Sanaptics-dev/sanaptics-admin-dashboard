import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside
      style={{
        width: "240px",
        background: "#0a2540",
        color: "#fff",
        padding: "16px",
      }}
    >
      <h2 style={{ marginBottom: "32px" }}>Sanaptics</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <NavLink to="/dashboard" style={linkStyle}>
          Dashboard
        </NavLink>

        <NavLink to="/onboarding" style={linkStyle}>
          Onboard School
        </NavLink>

        <NavLink to="/schools" style={linkStyle}>
          Schools
        </NavLink>
      </nav>
    </aside>
  );
};

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  padding: "10px 14px",
  borderRadius: "6px",
  textDecoration: "none",
  color: "#fff",
  background: isActive ? "#1f3a5f" : "transparent",
});

export default Sidebar;
