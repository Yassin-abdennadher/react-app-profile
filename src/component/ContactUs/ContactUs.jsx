import react, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("message envoyé : \nNom : ", nom, "\nEmail : ", email, "\nSubject : ", subject, "\nMessage : ", message);
    // alert('message envoyé avec succées, nous vous contacterons le plus tot possible. Merci pour votre confiance');
  }

  return (
    <div className="contact-container">
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Message Envoyé</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              {`message envoyé : \nNom : ", ${nom}, "\nEmail : ", ${email}, "\nSubject : ", ${subject}, "\nMessage : ", ${message}`}
            </div>
            <div class="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Ok</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row ">
          {/* Partie gauche - Informations de contact */}
          <div className="col-lg-5 col-md-6 d-none d-md-flex left-section">
            <div className="d-flex justify-content-center align-items-center h-100 w-75">
              <div className="text-center text-white slide-in-left">
                <i className="fas fa-envelope display-1 mb-4"></i>
                <h2 className="mb-3">Contactez-nous</h2>
                <p className="lead mb-4">Nous sommes là pour vous aider</p>

                <div className="contact-info text-start">
                  <div className="info-item mb-3">
                    <i className="fas fa-phone me-3"></i>
                    <span>+33 1 23 45 67 89</span>
                  </div>
                  <div className="info-item mb-3">
                    <i className="fas fa-envelope me-3"></i>
                    <span>contact@example.com</span>
                  </div>
                  <div className="info-item mb-3">
                    <i className="fas fa-map-marker-alt me-3"></i>
                    <span>Paris, France</span>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-clock me-3"></i>
                    <span>Lun - Ven: 9h - 18h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partie droite - Formulaire de contact */}
          <div className="col-lg-7 col-md-6 right-section">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="card contact-card slide-in-right">
                <div className="card-body p-5">
                  {/* En-tête */}
                  <div className="text-center mb-4">
                    <i className="fas fa-paper-plane text-primary fa-2x mb-3"></i>
                    <h3 className="card-title fw-bold">Envoyez un message</h3>
                    <p className="text-muted">Remplissez le formulaire ci-dessous</p>
                  </div>

                  {/* Formulaire de contact */}
                  <form onSubmit={handleSubmit}>
                    {/* Nom */}
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        <i className="fas fa-user me-2 text-primary"></i>
                        Nom complet
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Votre nom complet"
                        value={nom}
                        onChange={(e) => { setNom(e.target.value) }}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        <i className="fas fa-envelope me-2 text-primary"></i>
                        Adresse email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="votre@email.com"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        required
                      />
                    </div>

                    {/* Sujet */}
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">
                        <i className="fas fa-tag me-2 text-primary"></i>
                        Sujet
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        placeholder="Objet de votre message"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">
                        <i className="fas fa-comment me-2 text-primary"></i>
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Votre message..."
                        value={message}
                        onChange={(e) => { setMessage(e.target.value) }}
                        required
                      ></textarea>
                    </div>

                    {/* Bouton d'envoi */}
                    <button
                      type="button"
                      className="btn btn-primary w-100 py-2 contact-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i className="fas fa-paper-plane me-2"></i>
                      Envoyer le message
                    </button>
                  </form>


                  {/* Réseaux sociaux */}
                  <div className="text-center mt-4">
                    <p className="text-muted mb-3">Ou contactez-nous via</p>
                    <div className="social-links">
                      <button className="btn btn-outline-primary btn-sm me-2">
                        <i className="fab fa-facebook"></i>
                      </button>
                      <button className="btn btn-outline-info btn-sm me-2">
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button className="btn btn-outline-danger btn-sm me-2">
                        <i className="fab fa-instagram"></i>
                      </button>
                      <button className="btn btn-outline-dark btn-sm">
                        <i className="fab fa-linkedin"></i>
                      </button>
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

export default ContactUs;