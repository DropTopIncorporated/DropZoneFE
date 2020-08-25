import React, { useState, useEffect } from 'react';
import { AuthContext } from '../hooks/AuthContext';
import { fetchLogin, fetchVerify, fetchLogout, fetchSignup } from '../services/auth';

export default function AuthProvider({ children }) {
  const [activeUser, setActiveUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  const authService = (serviceFn, ...args) => {
    setAuthError(null);
    return serviceFn(...args)
      .then(user => setActiveUser(user))
      .catch(err => setAuthError(err));
  };

  const login = (username, password) => authService(fetchLogin, username, password);
  const signup = (username, password) => authService(fetchSignup, username, password);
  const logout = () => authService(fetchLogout).then(() => setActiveUser(null));
  

  useEffect(() => {
    setActiveUser(null);
    fetchVerify()
      .then(user => setActiveUser(user))
      .finally(() => setAuthLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ activeUser, authLoading, authError, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
