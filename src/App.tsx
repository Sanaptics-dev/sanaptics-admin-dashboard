import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Imports
import { AuthPage } from './pages/AuthPage';
import { useAuth } from './context/AuthContext';
import AppRouter from './routes/AppRouter';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/*"
          element={isAuthenticated ? <AppRouter /> : <Navigate to="/auth" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
