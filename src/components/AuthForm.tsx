// src/components/AuthForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { InputField } from './InputField';
import styles from '../pages/Auth/SignIn.module.css';

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
    <>
      <form onSubmit={handleSubmit} className={`${className}`}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <InputField
            id="email"
            type="email"
            placeholder="name@synaptics.com"
            value={formData.email}
            onChange={(value) => handleChange('email', value)}
            disabled={loading}
            className={styles.formControl}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <InputField
            id="password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={(value) => handleChange('password', value)}
            disabled={loading}
            className={styles.formControl}
          />
        </div>

        <div className={styles.optionsRow}>
            <label className={styles.checkboxLabel}>
                <input type="checkbox" />
                Keep me logged in
            </label>
            <a href="#" className={styles.forgotLink}>Forgot password?</a>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <button type="submit" className={styles.btnPrimary} disabled={loading}>
          {loading ? 'Processing...' : 'Sign in'}
        </button>
      </form>
      <div className={styles.signupText}>
          Don't have an account? <a href="#">Sign up</a>
      </div>
    </>
  );
};