import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layouts/adminLayout";
import Dashboard from "../features/DashboardSummary/pages/Dashboard";
import Onboarding from "../features/SchoolOnboarding/pages/Onboarding";
import Schools from "../features/ListOfOnboardedSchools/pages/Schools";
import SchoolDetails from "../features/ListOfOnboardedSchools/pages/SchoolDetails";
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
        <Route path="/announcements/create" element={<Dashboard />} />
        <Route path="/requests/manage" element={<AuthPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;


