
import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../stylesheets/custom.scss';
import MainPage from './MainPage.jsx';
import TitleBar from './components/TitleBar.jsx';
import AssetSearchPage from './AssetSearchPage.jsx';
import CreateAccountPage from './CreateAccountPage.jsx';
import LoginPage from './LoginPage.jsx';
import MyAccountPage from './MyAccountPage.jsx';

function App() {
  // Initialize isLoggedIn from localStorage or default to false
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    return storedLoginStatus ? JSON.parse(storedLoginStatus) : false;
  });

  // Function to toggle login status and store in localStorage
  const toggleLogin = (status) => {
    setIsLoggedIn(status);
    localStorage.setItem('isLoggedIn', JSON.stringify(status)); // Persist the login status
  };

  // Read login status from localStorage on mount
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus) {
      setIsLoggedIn(JSON.parse(storedLoginStatus));
    }
  }, []);

  return (
    <Router>
      <header>
        <TitleBar isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
      </header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<AssetSearchPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/login" element={<LoginPage toggleLogin={toggleLogin} />} /> {/* Pass toggleLogin to LoginPage */}
        <Route path="/my-account" element={<MyAccountPage />} /> {/* Add route for MyAccountPage */}
      </Routes>
    </Router>
  );
}

createRoot(document.getElementById('root')).render(<App />);
