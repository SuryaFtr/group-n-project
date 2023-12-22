import * as React from 'react';

import { useEffect, useState, useMemo } from 'react';
import { Navigate, useNavigate, useLocation, useParams } from 'react-router-dom';
import { showAlert, API_BASE_URL } from '../../components/function/index';
import axios from 'axios';

import './Single.scss'

import Navbar from '../../components/AdminPanel/navbar/Navbar'
import Sidebar from '../../components/AdminPanel/sidebar/Sidebar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const DetailUser = () => {
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
        pictureLink: '',
        email: '',
        username: '',
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        profession: '',
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
            const response = await axios.put(`${API_BASE_URL}/api/v1/user/${id}`,
                {
                    pictureLink: item.pictureLink,
                    email: item.email,
                    username: item.username,
                    firstName: item.firstName,
                    lastName: item.lastName,
                    phone: item.phone,
                    address: item.address,
                    profession: item.profession,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });

            showAlert('success', 'Update User Successful');
            console.log('Update User Successful', response.data);
            navigate('/adminpanel/users/');
        } catch (error) {
            if (error.response && error.response.status === 422 && error.response.data.errors) {
                const validationErrors = error.response.data.errors;
                const errorMessage = validationErrors.map((error) => `${error.msg}`).join('<br>');
                showAlert('error', 'Update User Failed', errorMessage);
            } else {
                showAlert('error', 'Update User Failed', 'An error occurred during submission. Please check your input and try again.', error.message);
            }
            console.error('Update User error', error.message);
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
                        <h1>Detail User</h1>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <img
                                src={item.pictureLink ? item.pictureLink
                                    : item.pictureLink
                                }
                                alt=""
                            />
                        </div>
                        <div className="right">
                            <div className='form'>
                                <div className="formInput">
                                    <label htmlFor='pictureLink'>
                                        Picture : <DriveFolderUploadOutlinedIcon className='icon' />
                                    </label>
                                    <input type="text" placeholder='User Picture'
                                        value={item.pictureLink}
                                        onChange={(e) => setItem({ ...item, pictureLink: e.target.value })}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Email</label>
                                    <input type="email" placeholder='User Email'
                                        value={item.email}
                                        onChange={(e) => setItem({ ...item, email: e.target.value })}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Username</label>
                                    <input type="text" placeholder='User Name'
                                        value={item.username}
                                        onChange={(e) => setItem({ ...item, username: e.target.value })}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>First Name</label>
                                    <input type="text" placeholder='First Name'
                                        value={item.firstName}
                                        onChange={(e) => setItem({ ...item, firstName: e.target.value })}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Last Name</label>
                                    <input type="text" placeholder='Last Name'
                                        value={item.lastName}
                                        onChange={(e) => setItem({ ...item, lastName: e.target.value })}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Phone</label>
                                    <input type="text" placeholder='User Phone'
                                        value={item.phone}
                                        onChange={(e) => setItem({ ...item, phone: e.target.value })}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Address</label>
                                    <textarea rows={2} type="text" placeholder='User Address'
                                        value={item.address}
                                        onChange={(e) => setItem({ ...item, address: e.target.value })}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Profession</label>
                                    <input type="text" placeholder='User Profession'
                                        value={item.profession}
                                        onChange={(e) => setItem({ ...item, profession: e.target.value })}
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

export default DetailUser