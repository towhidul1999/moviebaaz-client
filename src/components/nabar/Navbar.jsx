import React, {useState} from 'react';
import './navbar.scss';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
    }

    
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className='container'>

                <div className='left'>
                    <img src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt=''
                    />
                    <span>Homepage</span>
                    <span>Movies</span>
                    <span>Series</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>

                <div className='right'>
                    <SearchIcon className='icon'/>
                    <span>KIDS</span>
                    <NotificationsIcon className='icon'/>
                    <img src='https://i.pinimg.com/originals/4d/d5/96/4dd5961aae2eb1c265299d4e1a27212f.jpg' alt=''
                    />

                    <div className='profile'>
                        <ArrowDropDownIcon className='icon'/>
                        <div className='options'>
                            <span>Setting</span>
                            <span>Logout</span>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Navbar
