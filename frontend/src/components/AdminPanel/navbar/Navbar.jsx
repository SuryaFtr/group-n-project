import './Navbar.scss'

import { jwtDecode } from 'jwt-decode';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const token = localStorage.getItem('token');
    const tokenName = jwtDecode(token).userName;
    const tokenRole = jwtDecode(token).userRole;

    return (
        <div className='admin-navbar'>
            <div className="wrapper">
                <div className="navbar-title">
                    <p>Welcome {tokenName}, you are login as {tokenRole} </p>
                </div>
                <div className="navbar-items">
                    <div className="navbar-item">
                        <SettingsIcon className='icon' />
                    </div>
                    <div className="navbar-item">
                        <Link to='/adminpanel/logout'>
                            <LogoutIcon onClick={() => {
                                localStorage.removeItem('token');
                                window.location.replace('/login')
                            }} className='icon' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar