import { Voiture }  from '../models/Voiture.js';
import { BehaviorSubject } from 'rxjs';

class VoitureService {

    _voitureSub = new BehaviorSubject([])
    voitureObs = this._voitureSub.asObservable()

    getAllVoitures = () => {
        fetch('http://localhost:8090/voitures')
            .then(res => res.json())
            .then(data => data.map(v => new Voiture(v.id, v.marque, v.couleur)))
            .then(voitures => this._voitureSub.next(voitures))
            .catch(console.log)
    }
}

export default Object.freeze(new VoitureService());