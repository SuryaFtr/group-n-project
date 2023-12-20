import React, { useState } from 'react';
import { useMemo } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { showAlert, API_BASE_URL } from '../../components/function/index';
import axios from 'axios';
import './New.scss'

import Navbar from '../../components/AdminPanel/navbar/Navbar'
import Sidebar from '../../components/AdminPanel/sidebar/Sidebar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const NewProgram = () => {
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



    const [file, setFile] = useState("")

    if (isAuth) {
        return (
            <div className='new'>
                <Sidebar />
                <div className="newContainer">
                    <Navbar />
                    <div className="top">
                        <h1>Add New Program</h1>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <img
                                src={file ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                }
                                alt=""
                            />
                        </div>
                        <div className="right">
                            <form>
                                <div className="formInput">
                                    <label htmlFor='file'>
                                        Picture : <DriveFolderUploadOutlinedIcon className='icon' />
                                    </label>
                                    <input type="file" onChange={e => setFile(e.target.files[0])} id='file' style={{ display: "none" }} />
                                </div>
                                <div className="formInput">
                                    <label>Title</label>
                                    <input type="text" placeholder='Title' />
                                </div>
                                <div className="formInput">
                                    <label>Description</label>
                                    <textarea rows={10} type="text" placeholder='Description' />
                                </div>
                                <div className="formInput">
                                    <label>Program Date</label>
                                    <input type="text" placeholder='Program Date' />
                                </div>
                                <button type='submit'> Submit </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    } return <Navigate to="/login" />
}

export default NewProgram