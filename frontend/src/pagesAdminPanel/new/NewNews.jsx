import * as React from 'react';

import { useState, useMemo } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { showAlert, API_BASE_URL } from '../../components/function/index';
import axios from 'axios';

import './New.scss'

import Navbar from '../../components/AdminPanel/navbar/Navbar'
import Sidebar from '../../components/AdminPanel/sidebar/Sidebar'

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const NewNews = () => {
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

    const [imgUrl, setImgUrl] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const navigate = useNavigate();


    const handleSubmit = async () => {
        try {

            const response = await axios.post(`${API_BASE_URL}/api/v1/news`,
                {
                    imgUrl,
                    title,
                    text
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
            showAlert('success', 'Adding News Successful');
            console.log('Adding News Successful', response.data);
            navigate('/adminpanel/news/');
        } catch (error) {
            if (error.response && error.response.status === 422 && error.response.data.errors) {
                const validationErrors = error.response.data.errors;
                const errorMessage = validationErrors.map((error) => `${error.msg}`).join('<br>');
                showAlert('error', 'Add News Failed', errorMessage);
            } else {
                showAlert('error', 'Add News Failed', 'An error occurred during submission. Please check your input and try again.', error.message);
            }
            console.error('Add News error', error.message);
        }

    };

    if (isAuth) {
        return (
            <div className='new'>
                <Sidebar />
                <div className="newContainer">
                    <Navbar />
                    <div className="top">
                        <h1>Add New News</h1>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <img
                                src={imgUrl ? imgUrl
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                }
                                alt=""
                            />
                        </div>
                        <div className="right">
                            <div className='form'>
                                <div className="formInput">
                                    <label htmlFor='imgUrl'>
                                        Image URL : <DriveFolderUploadOutlinedIcon className='icon' />
                                    </label>
                                    <input type="text" placeholder='Image URL'
                                        value={imgUrl}
                                        onChange={(e) => setImgUrl(e.target.value)}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Title</label>
                                    <input type="text" placeholder='News Title'
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Description</label>
                                    <textarea rows={10} type="text" placeholder='News Description'
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
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

export default NewNews