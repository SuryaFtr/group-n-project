import "./Home.scss"
import { useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Sidebar from "../../components/AdminPanel/sidebar/Sidebar"
import Navbar from "../../components/AdminPanel/navbar/Navbar"
import Widget from "../../components/AdminPanel/widget/Widget"


const Home = () => {
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
            <div className="admin-panel">
                <Sidebar />
                <div className="panel-container">
                    <Navbar />
                    <div className="widgets">
                        <Widget type="users" />
                        <Widget type="programs" />
                        <Widget type="news" />
                        <Widget type="events" />
                    </div>
                </div>
            </div>
        )
    }
    return <Navigate to="/login" />
}

export default Home
