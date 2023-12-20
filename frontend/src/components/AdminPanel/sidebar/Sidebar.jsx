import './Sidebar.scss'
import { jwtDecode } from 'jwt-decode';

import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EventIcon from '@mui/icons-material/Event';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const token = localStorage.getItem('token');
    const tokenRole = jwtDecode(token).userRole;

    const handleRole = () => {
        if (tokenRole === 'admin') {
            return (
                <Link to='/adminpanel/users/'>
                    <li>
                        <SupervisedUserCircleIcon className='sidemenu-icon' />
                        <span>Users</span>
                    </li>
                </Link>
            )
        }
    }


    return (
        <div className='admin-sidebar'>
            <div className="top">
                <Link to='/adminpanel/'>
                    <span className="admin-logo">Admin Panel</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <div className="sidemenu-title">MAIN</div>
                    <Link to='/adminpanel/'>
                        <li>
                            <DashboardIcon className='sidemenu-icon' />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <div className="sidemenu-title">LIST</div>
                    {handleRole()}
                    <Link to='/adminpanel/programs/'>
                        <li>
                            <RemoveRedEyeIcon className='sidemenu-icon' />
                            <span>Programs</span>
                        </li>
                    </Link>
                    <Link to='/adminpanel/news'>
                        <li>
                            <NewspaperIcon className='sidemenu-icon' />
                            <span>News</span>
                        </li>
                    </Link>
                    <Link to='/adminpanel/events'>
                        <li>
                            <EventIcon className='sidemenu-icon' />
                            <span>Events</span>
                        </li>
                    </Link>
                    <div className="sidemenu-title">USER</div>
                    <Link to='/adminpanel/profile'>
                        <li>
                            <AccountCircleIcon className='sidemenu-icon' />
                            <span>Profile</span>
                        </li>
                    </Link>
                    <Link to='/adminpanel/logout'>
                        <li onClick={() => {
                            localStorage.removeItem('token');
                            window.location.replace('/login')
                        }}>
                            <LogoutIcon className='sidemenu-icon' />
                            <span>Logout</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar