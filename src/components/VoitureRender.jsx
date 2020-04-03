import React, { Fragment } from 'react';

const VoitureRender = (props) => {

    return (
        <Fragment>
            <p>id : {props.id} , marque : {props.marque} , couleur : {props.couleur}</p>
        </Fragment>
    );
};

export default VoitureRender;