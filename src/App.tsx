
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './features/DashboardSummary/pages/Dashboard';
import Onboarding from './features/SchoolOnboarding/pages/Onboarding';
import Schools from './features/ListOfOnboardedSchools/pages/Schools';
// import Settings from './pages/Settings';

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#0f172a]">
        <Sidebar />
        
        <div className="flex-1">
          <Topbar />
          
          <main className="pt-16 md:pl-64">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/schools" element={<Schools />} />
              {/* <Route path="/settings" element={<Settings />} /> */}
              <Route path="*" element={<Dashboard />} /> {/* default */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
