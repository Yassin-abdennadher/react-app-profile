import React from 'react';
import './ProfilePage.css';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
  const location = useLocation();
  const user = location.state?.user; // Récupère le user du state

  return (
    <div className="profile-container">
      <div className="container-fluid vh-100">
        <div className="row h-100">
          {/* Partie gauche - Photo et informations principales */}
          <div className="col-lg-5 col-md-6 d-none d-md-flex left-section">
            <div className="d-flex justify-content-center align-items-center h-100 w-100">
              <div className="text-center text-white slide-in-left">
                <div className="avatar-container mb-4">
                  <img 
                    src={user.avatar} 
                    alt="Profile" 
                    className="avatar-img"
                  />
                  <div className="online-indicator"></div>
                </div>
                <h2 className="mb-2">{user.firstName} {user.lastName}</h2>
                <p className="lead mb-3">{user.profession}</p>
                <p className="mb-4">{user.bio}</p>
                <div className="social-links">
                  <button className="btn btn-outline-light btn-sm me-2">
                    <i className="fab fa-linkedin"></i>
                  </button>
                  <button className="btn btn-outline-light btn-sm me-2">
                    <i className="fab fa-github"></i>
                  </button>
                  <button className="btn btn-outline-light btn-sm">
                    <i className="fab fa-twitter"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Partie droite - Détails du profil */}
          <div className="col-lg-7 col-md-6 right-section">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="card profile-card slide-in-right">
                <div className="card-body p-5">
                  {/* En-tête */}
                  <div className="text-center mb-4">
                    <i className="fas fa-user-circle text-primary fa-2x mb-3"></i>
                    <h3 className="card-title fw-bold">Mon Profil</h3>
                    <p className="text-muted">Informations personnelles</p>
                  </div>

                  {/* Informations utilisateur */}
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="info-item">
                        <i className="fas fa-user me-2 text-primary"></i>
                        <strong>Prénom:</strong>
                        <span>{user.firstName}</span>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="info-item">
                        <i className="fas fa-user me-2 text-primary"></i>
                        <strong>Nom:</strong>
                        <span>{user.lastName}</span>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="info-item">
                        <i className="fas fa-birthday-cake me-2 text-primary"></i>
                        <strong>Âge:</strong>
                        <span>{user.age} ans</span>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="info-item">
                        <i className="fas fa-phone me-2 text-primary"></i>
                        <strong>Téléphone:</strong>
                        <span>{user.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 mb-3">
                      <div className="info-item">
                        <i className="fas fa-envelope me-2 text-primary"></i>
                        <strong>Email:</strong>
                        <span>{user.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 mb-4">
                      <div className="info-item">
                        <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                        <strong>Localisation:</strong>
                        <span>{user.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Boutons d'action */}
                  <div className="row g-3">
                    <div className="col-md-6">
                      <button className="btn btn-primary w-100 py-2 profile-btn">
                        <i className="fas fa-edit me-2"></i>
                        Modifier le profil
                      </button>
                    </div>
                    <div className="col-md-6">
                      <button className="btn btn-outline-secondary w-100 py-2">
                        <i className="fas fa-download me-2"></i>
                        Télécharger CV
                      </button>
                    </div>
                  </div>

                  {/* Statistiques */}
                  <div className="row mt-4 pt-4 border-top">
                    <div className="col-4 text-center">
                      <div className="stat-item">
                        <h4 className="text-primary mb-1">12</h4>
                        <small>Projets</small>
                      </div>
                    </div>
                    <div className="col-4 text-center">
                      <div className="stat-item">
                        <h4 className="text-primary mb-1">24</h4>
                        <small>Abonnés</small>
                      </div>
                    </div>
                    <div className="col-4 text-center">
                      <div className="stat-item">
                        <h4 className="text-primary mb-1">89</h4>
                        <small>Posts</small>
                      </div>
                    </div>
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

export default ProfilePage;