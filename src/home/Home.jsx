import React from 'react';
import './home.scss';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Navbar from '../components/nabar/Navbar';
import Featured from '../components/featured/Featured.jsx';
import List from '../components/list/List';



const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            
            <Featured/>

            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}

export default Home
