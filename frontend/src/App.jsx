import React, { useState } from 'react';
import Register from './components/Register';
import PlanSelection from './components/PlanSelection';
import Dashboard from './components/Dashboard';

function App() {
  const [currentView, setCurrentView] = useState('register');
  const [userId, setUserId] = useState(null);

  const handleRegisterSuccess = (id) => {
    setUserId(id);
    setCurrentView('plan');
  };

  const handlePlanSuccess = () => {
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUserId(null);
    setCurrentView('register');
  }

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">🛡️ GigShield</div>
        {userId && currentView === 'dashboard' && (
          <button className="logout-btn" onClick={handleLogout}>Log Out</button>
        )}
      </header>
      
      <main className="main-content">
        {currentView === 'register' && <Register onSuccess={handleRegisterSuccess} />}
        {currentView === 'plan' && <PlanSelection userId={userId} onSuccess={handlePlanSuccess} />}
        {currentView === 'dashboard' && <Dashboard userId={userId} />}
      </main>
    </div>
  );
}

export default App;
