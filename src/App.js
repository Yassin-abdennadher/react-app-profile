import logo from './logo.svg';
import './App.css';
import LoginPage from './component/LoginPage/LoginPage';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ProfilePage from './component/ProfilePage/ProfilePage';
import { useState } from 'react';
import { Context } from './PersHooks/Context';
import ContactUs from './component/ContactUs/ContactUs';

function App() {
  const [isLogged,setIsLogged]=useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <BrowserRouter>
      <Context.Provider value={{isLogged,setIsLogged, currentUser, setCurrentUser }}>
        <div className="App">
          <header>
              {isLogged && (<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
              <div className="container-fluid">
                <Link className="navbar-brand" >
                  <img src={logo} alt="Bootstrap" width="40" height="34" />
                </Link>
                <Link className="navbar-brand" >APP Login</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Contact">ContactUs</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Login">Se connecter</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>)}
            
          </header>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/Login' element={<LoginPage />} />
            <Route path='/Profile' element={<ProfilePage />} />
            <Route path='/Contact' element={<ContactUs />} />
          </Routes>
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;