import React, { useState } from 'react';
import './LoginForm.css';
import { FaEye, FaEyeSlash} from 'react-icons/fa';
import axios from 'axios';

const LoginForm = ({onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)


  const handleLogin = async () => {
    try {
      const response = await axios.post('https://stg.dhunjam.in/account/admin/login', {
        username,
        password
      })
      if(response.status === 200 && response.data.response === 'Success'){
        const token = response.data.data.token;
        onLogin(token)
      }
      else {
        setError('Login failed. Please check your credentials')
      }
      
    } catch (error) {
      console.error('Login failed:', error.message)
      setError('An error occured. Please try again')
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
              type={!showPassword ? 'password' : 'text'} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
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
        {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  )
}

export default LoginForm;
