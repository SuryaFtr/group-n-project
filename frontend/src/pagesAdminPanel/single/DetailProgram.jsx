import './Single.scss'
import { useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Navbar from '../../components/AdminPanel/navbar/Navbar'
import Sidebar from '../../components/AdminPanel/sidebar/Sidebar'

const DetailProgram = () => {
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
                    DetailProgram
                </div>
            </div>
        )
    }
    return <Navigate to="/login" />
}

export default DetailProgram