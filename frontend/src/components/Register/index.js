import { useState } from 'react';
import { TextField, Button, Typography, Link, Select, MenuItem, FormControl, InputLabel, Card } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { showAlert, API_BASE_URL } from '../function'


function Register () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleLoginLinkClick = (e) => {
        e.preventDefault();
        navigate('/login');
    }

    const handleRegister = async () => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/v1/auth/register`, {
                username,
                password,
                role,
            });
            showAlert('success', 'Registration Successful', 'You can now log in with your credentials');
            console.log('Registration successful', response.data);
            navigate ('/login');  
        } catch (error) {

            if (error.response && error.response.status === 400 && error.response.data.message) {
                showAlert('error', 'Registration Failed', `<b>[CODE] ${error.response.data.message}</b><br>Please check your username and password`);
            } else {
                showAlert('error', 'Registration Failed', `<b>[CODE] </b><br>An error occured during registration. Please try again later`);
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
    <FormControl fullWidth margin="normal" variant="filled">
        <InputLabel id="role-label">Role</InputLabel>
        <Select
            labelId="role-label"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            label="Role"
        >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user">User</MenuItem>
        </Select>
    </FormControl>
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
};

export default Register;