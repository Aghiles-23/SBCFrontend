import  { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Création du contexte d'authentification
export const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Vérifier l'état d'authentification lors du chargement du composant
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!user);
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    console.log(isAuthenticated)
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Validation des props
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
