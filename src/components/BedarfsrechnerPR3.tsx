import waren from '../data/portRoyale3/waren.json';
import { useState} from 'react';

export const BedarfsrechnerPR3 = () => {
    const tage = useState(0);
    const anzahl = useState(0);

    const ergebnisse = waren.map((ware) => {
        const bedarf = Math.round(anzahl * ware.bedarf *tage);
        const profit = bedarf * ware.verkauf;
        return {bedarf, profit}
    })
}