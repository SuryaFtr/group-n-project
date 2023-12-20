import './Navbar.scss'

import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='admin-navbar'>
            <div className="wrapper">
                <div className="navbar-title">
                    Welcome User
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