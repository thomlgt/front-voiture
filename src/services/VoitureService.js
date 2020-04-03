import { Component } from 'react';
import { Voiture }  from '../models/Voiture.js';

class VoitureService extends Component {

    state = {
        voitures : []
    }

    getAllVoitures = () => {fetch('http://localhost:8090/voitures')
        .then(res => res.json())
        .then((data) => {
            const list = data.map(v => new Voiture(v.id, v.marque, v.couleur))
            console.log(list)
            this.setState({voitures : list})
        })
        .catch(console.log)
        return this.state.voitures}
}

export default Object.freeze(new VoitureService());