import { useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import LoginForm from './Components/LoginForm';

function App() {
  const [token, setToken] = useState(null)

  const handleLogin = (userToken) => {
    setToken(userToken)
  }
  return (
    <div className="App">
      {token ? (
        <Dashboard />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
