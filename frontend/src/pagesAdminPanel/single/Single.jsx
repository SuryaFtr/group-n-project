import './Single.scss'
import { useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Sidebar from '../../components/AdminPanel/sidebar/Sidebar';
import Navbar from '../../components/AdminPanel/navbar/Navbar';

const Single = () => {
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
            <div className='single'>
                <Sidebar />
                <div className="singleContainer">
                    <Navbar />
                    Single
                </div>
            </div>
        )
    } return <Navigate to="/login" />
}

export default Single