import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './layouts/adminLayout';

// Imports
import DashboardSummary from './features/DashboardSummary/pages/Dashboard';
import Onboarding from './features/SchoolOnboarding/pages/Onboarding';
import Schools from './features/ListOfOnboardedSchools/pages/Schools';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* SINGLE PARENT ROUTE: The Layout */}
        <Route path="/" element={<AdminLayout />}>

          {/* CHILDREN ROUTES: The Pages */}
          <Route index element={<Navigate to="/dashboard" replace />} />

          <Route path="dashboard" element={<DashboardSummary />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="schools" element={<Schools />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
