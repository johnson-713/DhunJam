import React, { useState } from 'react';
import './LoginForm.css';
import { FaEye, FaEyeSlash} from 'react-icons/fa';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async () => {
    try {
      const response = await fetch('https://stg.dhunjam.in/account/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json();

    } catch (error){
      console.error('Error:', error);
    }
  }
  return (
    <div className='login'>
        <p>Venue Admin Login</p>
        <form>
            <input 
              type='text' 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder='Username' 
            />

            <div style={{ position: 'relative'}}>
            <input 
              type={showPassword ? 'text' : 'password'} 
              value={password} 
              onChange={(e) => setPassword(e.target.val)} 
              placeholder='Password'
            />
            <button
              type='button'
              style={{ 
                position: 'absolute', 
                top: '50%', 
                right: '10px', 
                transform: 'translateY(-95%)', 
                backgroundColor: '#030303', 
                border: 'none'
                  }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 
                  <FaEyeSlash style={{ width: '20px', color: '#FFFFFF'}} /> 
                  : <FaEye style={{ width: '20px', color: '#FFFFFF'}} />}
            </button>
            </div>
        </form>
        <button className="button" onClick={handleLogin}>Sign in</button>
        <span>New Registration ?</span>
    </div>
  )
}

export default LoginForm;
