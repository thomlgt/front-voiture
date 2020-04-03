import React, { Fragment } from 'react';
import VoitureList from '../components/VoitureList';
import FormVoiture from '../components/FormVoiture';


const Home = (props) => {

    return (
        <Fragment>
            <h2>ALL VOITURES</h2>
            <VoitureList />
            <h2>INSERT VOITURE</h2>
            <FormVoiture />
        </Fragment>
    );
};

export default Home;