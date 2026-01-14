// context/AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

// New interface for mock user data including password
interface AuthCredentials {
  email: string;
  password: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    // Check localStorage on initial load
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Hardcoded mock users
  const mockUsers: AuthCredentials[] = [
    { email: "user1@example.com", password: "password1", name: "Palesa" },
    { email: "user2@example.com", password: "password2", name: "Lungile" },
  ];

  // Mock login function - replace with actual API call
  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      // short artificial delay to simulate API call
      // await new Promise(resolve => setTimeout(resolve, 600));

      const userByEmail = mockUsers.find(
        (mockUser) => mockUser.email === email
      );

      if (!userByEmail) {
        throw new Error('User not found');
      }

      if (userByEmail.password !== password) {
        throw new Error('Invalid password');
      }

      // If both email and password are correct
      const loggedInUser: User = {
        id: userByEmail.email, // Using email as ID for mock purposes
        email: userByEmail.email,
        name: userByEmail.name
      };
      setUser(loggedInUser);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
      localStorage.setItem('token', 'mock-jwt-token'); // Store a mock token
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Mock registration function
  const register = async (email: string, password: string, name: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: email, // Using email as ID for mock purposes
        email,
        name
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      localStorage.setItem('token', 'mock-jwt-token');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    // Optionally redirect to login page
    window.location.href = '/auth';
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    register,
    loading,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};