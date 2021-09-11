import React from 'react';
import './home.scss';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Navbar from '../components/nabar/Navbar';
import Featured from '../components/featured/Featured.jsx';


const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            
            <Featured type="movie"/>
        </div>
    )
}

export default Home
