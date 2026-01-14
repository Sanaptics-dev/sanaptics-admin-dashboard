// src/pages/AuthPage.tsx
import '../styles/Auth.css';
import { AuthContainer } from '../components/AuthContainer';
import { AuthHeader } from '../components/AuthHeader';
import { AuthForm } from '../components/AuthForm';
import { AuthIllustration } from '../components/AuthIllustration';


import illustration from '../assets/grid.svg';
import portrait from '../assets/logo.png';

export const AuthPage = () => {
  return (
    <AuthContainer>
      <div className="auth-grid">
        <div className="auth-left">
          <AuthHeader title="Admin Login" subtitle="Enter your credentials" />
          <AuthForm />
        </div>

        <div className="auth-right">
          <AuthIllustration svgSrc={illustration} imgSrc={portrait} alt="Brand" />
        </div>
      </div>
    </AuthContainer>
  );
};
