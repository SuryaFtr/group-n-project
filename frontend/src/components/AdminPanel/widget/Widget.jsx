import './Widget.scss'

import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EventIcon from '@mui/icons-material/Event';

const Widget = ({ type }) => {
    let data;

    const countAll = 100;

    switch (type) {
        case "users":
            data = {
                title: "USERS",
                link: "See All Users",
                icon: (
                    <SupervisedUserCircleIcon
                        className='icon'
                        style={{
                            color: 'crimson',
                            backgroundColor: 'rgba(255, 0, 0, 0.2)',
                        }}
                    />
                ),
            };
            break;
        case "programs":
            data = {
                title: "PROGRAMS",
                link: "See All Programs",
                icon: (
                    <RemoveRedEyeIcon
                        className='icon'
                        style={{
                            color: 'goldenrod',
                            backgroundColor: 'rgba(218, 165, 32, 0.2)',
                        }}
                    />
                ),
            };
            break;
        case "news":
            data = {
                title: "NEWS",
                link: "See All News",
                icon: (
                    <NewspaperIcon
                        className='icon'
                        style={{
                            color: 'green',
                            backgroundColor: 'rgba(0, 128, 0, 0.2)',
                        }}
                    />
                ),
            };
            break;
        case "events":
            data = {
                title: "EVENTS",
                link: "See All Events",
                icon: (
                    <EventIcon
                        className='icon'
                        style={{
                            color: 'purple',
                            backgroundColor: 'rgba(128, 0, 128, 0.2)',
                        }}
                    />
                ),
            };
            break;
        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="left">
                <span className="title">
                    {data.title}
                </span>
                <span className="counter">
                    {countAll}
                </span>
            </div>
            <div className="right">
                {data.icon}
                <span className="link">
                    {data.link}
                </span>
            </div>
        </div>
    )
}

export default Widget