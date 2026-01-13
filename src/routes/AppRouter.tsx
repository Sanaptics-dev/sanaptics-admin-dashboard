import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layouts/adminLayout";
import Dashboard from "../pages/Dashboard";
import Onboarding from "../pages/Onboarding";
import Schools from "../pages/Schools";
import SchoolDetails from "../pages/SchoolDetails";
import { AuthPage } from "../pages/AuthPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Navigate to="/auth" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/schools/:id" element={<SchoolDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
