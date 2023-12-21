import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../function';
import axios from 'axios';

import '../../styles/Main.css';
import Logo from '../../assets/Logo BOL - Text.png';

const Navbar = () => {
    const navigate = useNavigate();

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const checkAuthentication = async () => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/v1/user/profile`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        
        if (response.status === 200) {
            setUserRole(response.data.role);
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
            setUserRole(null);
        }
    } catch (error) {
        console.error('Error checking authentication:', error);
        setIsAuthenticated(false);
        setUserRole(null);
    } finally {
        setLoading(false);
    }
};

        checkAuthentication();
    }, []);

    const navLinks = {
        home: '/',
        about: '/event',
        program: '/program',
        news: '/news',
        contact: '/contact',
        signIn: '/login',
        LogOut: '/logout',
    };

    const redirectTo = (path) => {
        navigate(path);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUserRole(null);
        redirectTo(navLinks.home);
    };

    return (
        <header>
            <a href={navLinks.home} className="logo" onClick={() => redirectTo(navLinks.home)}>
                <img src={Logo} alt="Logo" />
            </a>

            {loading ? (
                <div>Loading...</div>
            ) : (
                <ul className="navbar">
                    <li onClick={() => redirectTo(navLinks.home)}>
                        <a href={navLinks.home} className="active">
                            Home
                        </a>
                    </li>
                    <li onClick={() => redirectTo(navLinks.event)}>
                        <a href={navLinks.event}>Event</a>
                    </li>
                    <li onClick={() => redirectTo(navLinks.program)}>
                        <a href={navLinks.program}>Program</a>
                    </li>
                    <li onClick={() => redirectTo(navLinks.news)}>
                        <a href={navLinks.news}>News</a>
                    </li>
                    <li onClick={() => redirectTo(navLinks.contact)}>
                        <a href={navLinks.contact}>Contact</a>
                    </li>
                </ul>
            )}

            <div className="main">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        {isAuthenticated ? (
                            <>
                                <span className="user">{`Welcome, ${userRole}`}</span>
                                <button className="logout" onClick={handleLogout}>
                                    Logout
                                </button>
                            </>
                        ) : (
                            <a href={navLinks.signIn} className="user" onClick={() => redirectTo(navLinks.signIn)}>
                                Sign In
                            </a>
                        )}
                    </>
                )}
            </div>
        </header>
    );
};

export default Navbar;
