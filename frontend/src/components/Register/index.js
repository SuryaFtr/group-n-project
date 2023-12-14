import { useState } from 'react';
import { TextField, Button, Typography, Link, Card } from '@mui/material';
<<<<<<< HEAD
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { showAlert, API_BASE_URL } from '../function';
=======
import { useNavigate } from 'react-router-dom';
import { showAlert, API_BASE_URL } from '../function';
import axios from 'axios';
>>>>>>> d6ff0e4a112d43bc4c5bc95065ac450c3403bdac

function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLoginLinkClick = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    const handleRegister = async () => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/v1/auth/register`, {
                email,
                username,
                password,
            });

            showAlert('success', 'Registration Successful', 'You can now log in with your credentials');
            console.log('Registration successful', response.data);
            navigate('/login');
        } catch (error) {
            if (error.response && error.response.status === 422 && error.response.data.errors) {
<<<<<<< HEAD
                
                const validationErrors = error.response.data.errors;

                const errorMessage = validationErrors.map((error) => `<b>${error.param}</b>: ${error.msg}`).join('<br>');
                showAlert('error', 'Registration Failed', errorMessage);
            } else {
                showAlert('error', 'Registration Failed', '<b>[CODE] </b><br>An error occurred during registration. Please try again later');
=======
                const validationErrors = error.response.data.errors;
                const errorMessage = validationErrors.map((error) => `${error.msg}`).join('<br>');
                showAlert('error', 'Registration Failed', errorMessage);
            } else {
                showAlert('error', 'Registration Failed', 'An error occurred during registration. Please check your input and try again.');
>>>>>>> d6ff0e4a112d43bc4c5bc95065ac450c3403bdac
            }
            console.error('Registration error', error.message);
        }
    };

    return (
        <Card style={{ textAlign: 'center', margin: '90px auto', padding: '30px', maxWidth: '400px', color: '#265073', fontWeight: 'bold', borderRadius: '15px', boxShadow: '0 8px 11px rgba(0, 0.2, 0.3, 0.4)' }}>
            <Typography variant="h4" gutterBottom style={{ marginBottom: '20px' }}>
                REGISTER
            </Typography>
            <TextField
                label="Email"
                variant="filled"
                fullWidth
                margin="normal"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Username"
                variant="filled"
                fullWidth
                margin="normal"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                variant="filled"
                fullWidth
                margin="normal"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleRegister} style={{ marginTop: '20px', borderRadius: '8px' }}>
                Register
            </Button>
            <Typography style={{ marginTop: '10px', paddingTop: '10px', fontSize: '0.9rem' }}>
                <Link href="#" onClick={handleLoginLinkClick}>
                    Login here if you already have an account
                </Link>
            </Typography>
        </Card>
    );
}

export default Register;
