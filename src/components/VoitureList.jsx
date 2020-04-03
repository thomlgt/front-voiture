import React, { Fragment, useState, useEffect } from 'react';
import VoitureRender from './VoitureRender';
import VoitureService from '../services/VoitureService';

const VoitureList = (props) => {

    const [voitures, setVoitures] = useState([]);

    useEffect(() => {
        let voituresSub = VoitureService.voitureObs.subscribe(voitures => setVoitures(voitures))
        VoitureService.getAllVoitures()
        return () => {
            voituresSub.unsubscribe()
        }
    }, [setVoitures])

    return (
        <Fragment>
            {voitures?.map(v => <VoitureRender id={v.id} marque={v.marque} couleur={v.couleur}/>)}
        </Fragment>
    );
};

export default VoitureList;