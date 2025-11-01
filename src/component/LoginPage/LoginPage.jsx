import React, { useContext, useEffect, useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../PersHooks/Context';
import axios from 'axios';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { setIsLogged, setCurrentUser } = useContext(Context);
  const [usersData, setUsersData] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      setUsersData(response.data);
    } catch (error) {
      throw new Error("error with getting data");
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = usersData.find(user => user.email === email && user.password === password);
    if (user) {
      setIsLogged(true);
      setCurrentUser(user); // Stocke l'utilisateur dans le contexte
      navigate("/Profile");
    }
  };

  return (
    <div className="login-container">
      <div className="container-fluid vh-100">
        <div className="row h-100">
          {/* Partie gauche - Illustration */}
          <div className="col-lg-6 col-md-6 d-none d-md-flex left-section">
            <div className="d-flex justify-content-center align-items-center h-100 w-75">
              <div className="text-center text-white slide-in-left">
                <i className="fas fa-rocket mb-4"></i>
                <h2 className="mb-3">Bienvenue</h2>
                <p className="lead">Connectez-vous pour accéder à votre espace</p>
              </div>
            </div>
          </div>

          {/* Partie droite - Formulaire */}
          <div className="col-lg-6 col-md-6 right-section">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="card login-card slide-in-right">
                <div className="card-body p-5">
                  {/* En-tête */}
                  <div className="text-center mb-4">
                    <i className="fas fa-lock text-primary fa-2x mb-3"></i>
                    <h3 className="card-title fw-bold">Connexion</h3>
                    <p className="text-muted">Entrez vos identifiants</p>
                  </div>

                  {/* Formulaire */}
                  <form>
                    {/* Email */}
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        <i className="fas fa-envelope me-2 text-primary"></i>
                        Adresse email
                      </label>
                      <div className="input-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="votre@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Mot de passe */}
                    <div className="mb-4">
                      <label htmlFor="password" className="form-label">
                        <i className="fas fa-key me-2 text-primary"></i>
                        Mot de passe
                      </label>
                      <div className="input-group">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className="form-control"
                          id="password"
                          placeholder="Votre mot de passe"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                          className="input-group-text password-toggle"
                          onClick={togglePasswordVisibility}
                          style={{ cursor: 'pointer' }}
                        >
                          <i className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                        </span>
                      </div>
                    </div>

                    {/* Se souvenir de moi */}
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="remember"
                      />
                      <label className="form-check-label" htmlFor="remember">
                        Se souvenir de moi
                      </label>
                    </div>

                    {/* Bouton de connexion */}
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="btn btn-primary w-100 py-2 mb-3 login-btn"
                    >
                      <i className="fas fa-sign-in-alt me-2"></i>
                      Se connecter
                    </button>

                    {/* Lien mot de passe oublié */}
                    <div className="text-center">
                      <a href="#!" className="text-decoration-none">
                        Mot de passe oublié ?
                      </a>
                    </div>

                    {/* Séparateur */}
                    <div className="my-4 text-center position-relative">
                      <hr />
                      <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted">
                        ou
                      </span>
                    </div>

                    {/* Boutons sociaux */}
                    <div className="row g-2">
                      <div className="col-6">
                        <button type="button" className="btn btn-outline-danger w-100">
                          <i className="fab fa-google me-2"></i>
                          Google
                        </button>
                      </div>
                      <div className="col-6">
                        <button type="button" className="btn btn-outline-primary w-100">
                          <i className="fab fa-facebook me-2"></i>
                          Facebook
                        </button>
                      </div>
                    </div>
                  </form>

                  {/* Inscription */}
                  <div className="text-center mt-4">
                    <p className="text-muted">
                      Pas de compte ?{' '}
                      <a href="#!" className="text-primary text-decoration-none fw-bold">
                        S'inscrire
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;