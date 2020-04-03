import React, { Fragment } from 'react';
import VoitureRender from './VoitureRender';

const VoitureList = (props) => {

    return (
        <Fragment>
            {props.data.voitures?.map(v => <VoitureRender id={v.id} marque={v.marque} couleur={v.couleur}/>)}
        </Fragment>
    );
};

export default VoitureList;