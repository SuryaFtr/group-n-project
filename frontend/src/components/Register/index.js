import { useState } from 'react';
import { TextField, Button, Typography, Link, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { showAlert, API_BASE_URL } from '../function';
import axios from 'axios';
import '../../styles/Register.css';

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
                const validationErrors = error.response.data.errors;
                const errorMessage = validationErrors.map((error) => `${error.msg}`).join('<br>');
                showAlert('error', 'Registration Failed', errorMessage);
            } else {
                showAlert('error', 'Registration Failed', 'An error occurred during registration. Please check your input and try again.');
            }
            console.error('Registration error', error.message);
        }
    };

    return (
        <Card className="register" style={{ backgroundColor: '#006D82'}}>
            <Typography variant="h4" gutterBottom style={{ marginBottom: '20px', fontFamily: 'PoppinsSB', color: 'white'}}>
                REGISTER
            </Typography>
            <TextField style={{ backgroundColor: 'white' }}
                label="Email"
                variant="filled"
                fullWidth
                margin="normal"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
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
            <Button variant="contained" color="primary" onClick={handleRegister} style={{ color: '#006D82', backgroundColor: 'white', margin: '20px 0px', fontSize: '14px', padding: '5px 30px', borderRadius: '4px', fontFamily: 'PoppinsSB'}}>
                Register
            </Button>
            <Typography style={{ fontSize: '12px', fontFamily: 'PoppinsSB'}}>
                <Link href="#" onClick={handleLoginLinkClick} style={{ fontSize: '12px', color:'white', fontFamily: 'PoppinsSB'}} className="teks">
                    Login here if you already have an account
                </Link>
            </Typography>
        </Card>
    );
}

export default Register;