import React, { Fragment } from 'react';
import VoitureList from '../components/VoitureList';


const Home = (props) => {

    return (
        <Fragment>
            <h2>ALL VOITURES</h2>
            <VoitureList />

        </Fragment>
    );
};

export default Home;