import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../../components/function';

import './List.scss'
import Sidebar from "../../components/AdminPanel/sidebar/Sidebar"
import Navbar from "../../components/AdminPanel/navbar/Navbar"
import TableEvents from '../../components/AdminPanel/datatable/TableEvents'

const ListEvents = () => {
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

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        // Fetch data event
        axios.get(`${API_BASE_URL}/api/v1/event`)
            .then(response => {
                // Add a unique id to each data item if it doesn't have one
                const dataWithId = response.data.map((item, index) => ({
                    ...item,
                    id: index + 1,
                }));
                setData(dataWithId);
            })
            .catch(error => {
                alert('Error fetching data:' + error);
                console.error('Error fetching data:', error);
            });
    };
    const handleDelete = (id) => {
        // Perform DELETE request
        axios.delete(`${API_BASE_URL}/api/v1/event/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then(response => {
                // If successful, update the data
                fetchData();
            })
            .catch(error => {
                alert('Error deleting data: ' + error);
                console.error('Error deleting data:', error);
            });
    };


    if (isAuth) {

        return (
            <div className='list'>
                <Sidebar />
                <div className="listContainer">
                    <Navbar />
                    <TableEvents data={data} onDelete={handleDelete} />
                </div>
            </div>
        )
    }
    return <Navigate to="/login" />
}

export default ListEvents