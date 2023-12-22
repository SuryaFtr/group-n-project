import * as React from 'react';

import { useEffect, useState, useMemo } from 'react';
import { Navigate, useNavigate, useLocation, useParams } from 'react-router-dom';
import { showAlert, API_BASE_URL } from '../../components/function/index';
import axios from 'axios';

import './Single.scss'

import Navbar from '../../components/AdminPanel/navbar/Navbar'
import Sidebar from '../../components/AdminPanel/sidebar/Sidebar'

const DetailUserRole = () => {
    const token = localStorage.getItem('token');

    const location = useLocation();

    const isAuth = useMemo(
        () => {
            if (location.pathname) {
                return !!token
            }
        },
        [location.pathname, token]
    )

    const { id } = useParams();
    const [item, setItem] = useState({
        permissions: '',
        username: '',
    });

    // Function to fetch item data by ID
    const fetchItemById = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/v1/user/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            });
            setItem(response.data);
        } catch (error) {
            console.error('Error fetching item:', error);
        }
    }

    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const response = await axios.put(`${API_BASE_URL}/api/v1/user/add-role/${id}`,
                {
                    permissions: item.permissions,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });

            showAlert('success', 'Update User Role Successful');
            console.log('Update User Role Successful', response.data);
            navigate('/adminpanel/users/');
        } catch (error) {
            if (error.response && error.response.status === 422 && error.response.data.errors) {
                const validationErrors = error.response.data.errors;
                const errorMessage = validationErrors.map((error) => `${error.msg}`).join('<br>');
                showAlert('error', 'Update User Role Failed', errorMessage);
            } else {
                showAlert('error', 'Update User Role Failed', 'An error occurred during submission. Please check your input and try again.', error.message);
            }
            console.error('Update User Role error', error.message);
        }

    };
    // Fetch item data on component mount
    useEffect(() => {
        // eslint-disable-next-line
        fetchItemById();
        // eslint-disable-next-line
    }, [id]);

    if (isAuth) {
        return (
            <div className='single'>
                <Sidebar />
                <div className="singleContainer">
                    <Navbar />
                    <div className="top">
                        <h1>Detail User Role</h1>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <h2>
                                Change User Role
                            </h2>
                        </div>
                        <div className="right">
                            <div className='form'>
                                <div className="formInput">
                                    <label>Username</label>
                                    <input type="text" placeholder='User Name'
                                        value={item.username}
                                        onChange={(e) => setItem({ ...item, username: e.target.value })}
                                        disabled />
                                </div>
                                <div className="formInput">
                                    <label>User Role {"(Choose between 'admin', 'staff', or 'member')"}</label>
                                    <input type="text" placeholder='Choose between admin, staff, or member'
                                        value={item.permissions}
                                        onChange={(e) => setItem({ ...item, permissions: e.target.value })}
                                    />
                                </div>
                                <button onClick={handleSubmit} type='submit' className='button'> Update </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return <Navigate to="/login" />
}

export default DetailUserRole