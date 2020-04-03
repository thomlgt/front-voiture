import React, { Fragment, useState } from 'react';
import VoitureService from '../services/VoitureService';
import { Voiture } from '../models/Voiture';

const FormVoiture = (props) => {

    const [marque, setMarque] = useState('')
    const [couleur, setCouleur] = useState('')

    const handleClick = (event) => {
        event.preventDefault()
        let voiture = new Voiture(marque, couleur)
        VoitureService.insertVoiture(voiture)
    }

    const handleChangeMarque = (event) => {
        setMarque(event.target.value)
    }

    const handleChangeCouleur = (event) => {
        setCouleur(event.target.value)
    }

    return (
        <Fragment>
            <label>Marque :</label>
            <input type='text' onChange={handleChangeMarque} name='marque'></input>

            <label>Couleur :</label>
            <input type='text' onChange={handleChangeCouleur} name='couleur'></input>

            <button onClick={handleClick}>Envoyer</button> 
        </Fragment>
    );
};

export default FormVoiture;