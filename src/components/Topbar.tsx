const Topbar = () => {
    return (
      <header
        style={{
          height: "64px",
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
        }}
      >
        <span>Admin Console</span>
  
        <div>
          <span style={{ fontSize: "14px", color: "#555" }}>
            Sanaptics Admin
          </span>
        </div>
      </header>
    );
  };
  
  export default Topbar;
  