import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />

        <main style={{ padding: "24px", background: "#f5f7fa", flex: 1 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
