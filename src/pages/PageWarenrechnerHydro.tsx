import { waren } from '../data/hydroponics/waren.json'
import { useState } from "react";

export const PageWarenrechnerHydro =() => {
    const [prozent, setProzent] = useState(0);

    const handleProzentChange = (e: React.ChangeEvent) => {
        const _prozent = Number((e.target as HTMLInputElement).value);
        if (!Number.isNaN(_prozent)) {
            setProzent(_prozent);
        }
    }

    const data = waren.map((ware) => {
        const normal = Math.round(prozent * ware.normalpreis);
        const besonderer = Math.round(prozent * ware.besondererPreis);
        return { name: ware.name, normal, besonderer}
    });

    const handleClear= () => {
        setProzent(0)
    }
    return (
    <div className='page pageWarenrechnerHydro'>
        <h2 className='überschrift'>Preisrechner</h2>

        <div>
            <form>
                Preisbonus
                <input
                type="text"
                placeholder='0'
                id= "prozent"
                value={prozent}
                onChange={(e) => handleProzentChange(e)}
                />
                %
                <button onClick={() => handleClear()}>zurück setzen</button>
            </form>

            
        </div>
    </div>
);
};