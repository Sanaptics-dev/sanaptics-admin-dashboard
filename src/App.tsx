import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter'; // your router with AdminLayout

export default function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}
