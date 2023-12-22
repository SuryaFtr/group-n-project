import * as React from 'react';

import { useEffect, useState, useMemo } from 'react';
import { Navigate, useNavigate, useLocation, useParams } from 'react-router-dom';
import { showAlert, API_BASE_URL } from '../../components/function/index';
import axios from 'axios';
import dayjs from 'dayjs';

import './Single.scss'

import Navbar from '../../components/AdminPanel/navbar/Navbar'
import Sidebar from '../../components/AdminPanel/sidebar/Sidebar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



const DetailEvent = () => {
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
        title: '',
        description: '',
        eventDate: '',
        eventLink: '',
    });

    // Function to fetch item data by ID
    const fetchItemById = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/v1/event/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            });
            setItem(response.data);
        } catch (error) {
            console.error('Error fetching item:', error);
        }
    }

    const handleDateChange = (newDate) => {
        setItem((prevItem) => ({
            ...prevItem,
            eventDate: newDate,
        }));
    };

    const navigate = useNavigate();


    const handleSubmit = async () => {
        try {
            const eveDate = item.eventDate.toISOString().split('T')[0];
            const response = await axios.put(`${API_BASE_URL}/api/v1/event/${id}`,
                {
                    pictureLink: item.pictureLink,
                    description: item.description,
                    title: item.title,
                    eventDate: eveDate,
                    eventLink: item.eventLink,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });

            showAlert('success', 'Update Event Successful');
            console.log('Update Event Successful', response.data);
            navigate('/adminpanel/events/');
        } catch (error) {
            if (error.response && error.response.status === 422 && error.response.data.errors) {
                const validationErrors = error.response.data.errors;
                const errorMessage = validationErrors.map((error) => `${error.msg}`).join('<br>');
                showAlert('error', 'Update Event Failed', errorMessage);
            } else {
                showAlert('error', 'Update Event Failed', 'An error occurred during submission. Please check your input and try again.', error.message);
            }
            console.error('Update Event error', error.message);
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
                        <h1>Detail Event</h1>
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
                                    <input type="text" placeholder='Picture Link'
                                        value={item.pictureLink}
                                        onChange={(e) => setItem({ ...item, pictureLink: e.target.value })}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Title</label>
                                    <input type="text" placeholder='Event Title'
                                        value={item.title}
                                        onChange={(e) => setItem({ ...item, title: e.target.value })}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Description</label>
                                    <textarea rows={10} type="text" placeholder='Event Description'
                                        value={item.description}
                                        onChange={(e) => setItem({ ...item, description: e.target.value })}
                                    />
                                </div>
                                <div className="formInput">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            label="Event Date"
                                            value={dayjs(item.eventDate)}
                                            onChange={handleDateChange}
                                            format="YYYY-MM-DD"
                                            textField={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </div>
                                <div className="formInput">
                                    <label>Link</label>
                                    <input type="text" placeholder='Event Link'
                                        value={item.eventLink}
                                        onChange={(e) => setItem({ ...item, eventLink: e.target.value })}
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

export default DetailEvent