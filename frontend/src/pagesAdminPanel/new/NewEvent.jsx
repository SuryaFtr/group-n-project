import * as React from 'react';

import { useState, useMemo } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { showAlert, API_BASE_URL } from '../../components/function/index';
import axios from 'axios';

import './New.scss'

import Navbar from '../../components/AdminPanel/navbar/Navbar'
import Sidebar from '../../components/AdminPanel/sidebar/Sidebar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const NewEvent = () => {
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

    const [pictureLink, setPictureLink] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [eveDate, setEventDate] = useState('');
    const [eventLink, setEventLink] = useState('');

    const handleDateChange = (date) => {
        setEventDate(date);
    };

    const navigate = useNavigate();


    const handleSubmit = async () => {
        try {

            const eventDate = eveDate.toISOString().split('T')[0];

            const response = await axios.post(`${API_BASE_URL}/api/v1/event`,
                {
                    pictureLink,
                    title,
                    description,
                    eventDate,
                    eventLink
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
            showAlert('success', 'Adding Event Successful');
            console.log('Adding Event Successful', response.data);
            navigate('/adminpanel/events/');
        } catch (error) {
            if (error.response && error.response.status === 422 && error.response.data.errors) {
                const validationErrors = error.response.data.errors;
                const errorMessage = validationErrors.map((error) => `${error.msg}`).join('<br>');
                showAlert('error', 'Add Event Failed', errorMessage);
            } else {
                showAlert('error', 'Add Event Failed', 'An error occurred during submission. Please check your input and try again.', error.message);
            }
            console.error('Add Event error', error.message);
        }

    };

    if (isAuth) {
        return (
            <div className='new'>
                <Sidebar />
                <div className="newContainer">
                    <Navbar />
                    <div className="top">
                        <h1>Add New Event</h1>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <img
                                src={pictureLink ? pictureLink
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
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
                                        value={pictureLink}
                                        onChange={(e) => setPictureLink(e.target.value)}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Title</label>
                                    <input type="text" placeholder='Program Title'
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Description</label>
                                    <textarea rows={10} type="text" placeholder='Program Description'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <div className="formInput">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            label="Event Date"
                                            value={eveDate}
                                            onChange={handleDateChange}
                                            format="YYYY-MM-DD"
                                            textField={(props) => <TextField {...props} />}
                                        />
                                    </LocalizationProvider>
                                </div>
                                <div className="formInput">
                                    <label>Link</label>
                                    <input type="text" placeholder='Event Link'
                                        value={eventLink}
                                        onChange={(e) => setEventLink(e.target.value)}
                                    />
                                </div>
                                <button onClick={handleSubmit} type='submit' className='button'> Submit </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } return <Navigate to="/login" />
}

export default NewEvent