import { useState } from 'react';
import { TextField, Button, Typography, Link, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { showAlert, API_BASE_URL } from '../function';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import '../../styles/Login.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegisterLinkClick = (e) => {
        e.preventDefault();
        navigate('/register');
    }

    const handleLoginError = (error) => {
        if (error.response) {
            if (error.response.status === 422 && error.response.data.errors) {
                handleValidationErrors(error.response.data.errors);
            } else {
                handleOtherErrors();
            }
        }
    };

    const handleValidationErrors = (validationErrors) => {
        const errorMessage = validationErrors.map((error) => `<b>${error.param}</b>: ${error.msg}`).join('<br>');
        showAlert('error', 'Login Failed', errorMessage);
    };

    const handleOtherErrors = () => {
        showAlert('error', 'Login Failed', `<b>[CODE] </b><br>An error occurred during login. Please try again later`);
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/v1/auth/login`, {
                username,
                password,
            });

            const token = response.data;
            localStorage.setItem('token', token.responseToken.accesToken);
            console.log('Login successful', response.data);
            showAlert('success', 'Successfully log in', '');

            const accessToken = localStorage.getItem('token');
            const decodeToken = jwtDecode(accessToken).userRole;

            if (decodeToken === 'admin' || decodeToken === 'staff') {
                navigate('/adminpanel');
            } else {
                navigate('/');
            }

        } catch (error) {
            handleLoginError(error);
            console.error('Login error', error.message);
        }
    };

    return (
        <Card className="login" style={{ backgroundColor: '#006D82' }}>
          <Typography variant="h4" gutterBottom className="teks" style={{ marginBottom: '20px', fontFamily: 'PoppinsSB', color: 'white'}}>
            LOGIN
          </Typography>
          <TextField style={{ backgroundColor: 'white' }}
            label="Username"
            variant="filled"
            fullWidth
            margin="normal"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField style={{ backgroundColor: 'white' }}
            label="Password"
            type="password"
            variant="filled"
            fullWidth
            margin="normal"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleLogin} style={{ color: '#006D82', backgroundColor: 'white', margin: '20px 0px', fontSize: '14px', padding: '5px 30px', borderRadius: '4px', fontFamily: 'PoppinsSB'}}>
            Login
          </Button>
          <Typography style={{ fontSize: '12px', fontFamily: 'PoppinsSB', color: 'white'}}>
            <Link href="#" onClick={handleRegisterLinkClick} className="teks" style={{ fontSize: '12px', color:'white', fontFamily: 'PoppinsSB'}}>
              Register here if you don't have an account
            </Link>
          </Typography>
        </Card>
      );
}

export default LoginForm;