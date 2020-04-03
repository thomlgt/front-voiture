import React, { Fragment, useState, useEffect } from 'react';
import VoitureList from '../components/VoitureList';
import VoitureService from '../services/VoitureService';
//import VoitureService from '../services/VoitureService';

const Home = (props) => {

    const [voitures, setVoitures] = useState([]);

    useEffect(() => {
        setVoitures(VoitureService.getAllVoitures())
    }, [])

    return (
        <Fragment>
            <VoitureList data={voitures} />
        </Fragment>
    );
};

export default Home;