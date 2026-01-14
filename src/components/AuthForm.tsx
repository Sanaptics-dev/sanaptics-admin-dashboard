// src/components/AuthForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { InputField } from './InputField';
import { Button } from './Button';

interface AuthFormProps {
  className?: string;
}

export const AuthForm: React.FC<AuthFormProps> = ({ className = '' }) => {
  const navigate = useNavigate();
  const { login, loading, error } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await login(formData.email, formData.password);
      navigate('/dashboard');
    } catch (err) {
      console.error('Authentication error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`auth-form ${className}`}>
      <InputField
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(value) => handleChange('email', value)}
        disabled={loading}
      />

      <InputField
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(value) => handleChange('password', value)}
        disabled={loading}
      />

      <a href="#" className="forgot-password">Forgot Password?</a>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Login'}
      </Button>
    </form>
  );
};