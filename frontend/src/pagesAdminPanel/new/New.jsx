import './New.scss'
import { useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Sidebar from '../../components/AdminPanel/sidebar/Sidebar';
import Navbar from '../../components/AdminPanel/navbar/Navbar';

const New = () => {
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
    if (isAuth) {
        return (
            <div className='new'>
                <Sidebar />
                <div className="newContainer">
                    <Navbar />
                    New
                </div>
            </div>
        )
    } return <Navigate to="/login" />
}

export default New