import React, { useState } from 'react';
import rohstoffe from "../data/rust/rohstoffe.json";
import komponenten from "../data/rust/komponenten.json";
import nahrung from "../data/rust/nahrung.json"

interface PreisItem {
    name: string;
    einkaufspreis: number;
    verkaufspreis: number;
    bild: string; // Bild-URL aus der JSON-Datei
}

export const PageRustEconomieRechner: React.FC = () => {
    const [values, setValues] = useState<Record<string, string>>({});

    const handleChange = (name: string, value: string) => {
        setValues({
            ...values,
            [name]: value
        });
    };

    const calculateTotalPrice = (): { einkaufsGesamt: number; verkaufsGesamt: number } => {
        return [...rohstoffe, ...komponenten, ...nahrung].reduce((totals, item: PreisItem) => {
            const quantity = values[item.name] ? parseFloat(values[item.name]) : 0;
            totals.einkaufsGesamt += quantity * item.einkaufspreis;
            totals.verkaufsGesamt += quantity * item.verkaufspreis;
            return totals;
        }, { einkaufsGesamt: 0, verkaufsGesamt: 0 });
    };

    const clearFields = () => {
        setValues({});
    };

    const totals = calculateTotalPrice();

    return (
        <div className="page pageRustEconomieRechner">
            <h1>Coin Rechner</h1>
            <h2 style={{marginBottom:"10px"}}>Gesamt Einkaufspreis: {totals.einkaufsGesamt.toFixed(2)} Coins</h2>
            <h2>Gesamt Verkaufspreis: {totals.verkaufsGesamt.toFixed(2)} Coins</h2>
            <button onClick={clearFields} style={{ marginTop: '20px', marginBottom: '30px' }}>Felder leeren</button>
            <h2>Rohstoffe</h2>
            <form style={{ display: 'flex', flexWrap: 'wrap' }}>
                {rohstoffe.map((item: PreisItem) => (
                    <div key={item.name} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <img
                            src={item.bild} // Verwende den direkten Pfad zur Bilddatei
                            alt={item.name}
                            style={{ width: '30px', height: '30px', marginRight: '10px' }}
                        />
                        <input
                            type="number"
                            min="0"
                            step="any"
                            placeholder={`${item.name}`}
                            value={values[item.name] || ''}
                            onChange={(e) => handleChange(item.name, e.target.value)}
                            style={{ marginRight: '10px' }}
                        />
                    </div>
                ))}
            </form>
            <h2 style={{ marginTop: "50px" }}>Komponenten</h2>
            <form style={{ display: 'flex', flexWrap: 'wrap' }}>
                {komponenten.map((item: PreisItem) => (
                    <div key={item.name} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <img
                            src={item.bild} // Verwende den direkten Pfad zur Bilddatei
                            alt={item.name}
                            style={{ width: '30px', height: '30px', marginRight: '10px' }}
                        />
                        <input
                            type="number"
                            min="0"
                            step="any"
                            placeholder={`${item.name}`}
                            value={values[item.name] || ''}
                            onChange={(e) => handleChange(item.name, e.target.value)}
                            style={{ marginRight: '10px' }}
                        />
                    </div>
                ))}
            </form>
            <h2 style={{ marginTop: "50px" }}>Nahrung</h2>
            <form style={{ display: 'flex', flexWrap: 'wrap' }}>
                {nahrung.map((item: PreisItem) => (
                    <div key={item.name} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <img
                            src={item.bild} // Verwende den direkten Pfad zur Bilddatei
                            alt={item.name}
                            style={{ width: '30px', height: '30px', marginRight: '10px' }}
                        />
                        <input
                            type="number"
                            min="0"
                            step="any"
                            placeholder={`${item.name}`}
                            value={values[item.name] || ''}
                            onChange={(e) => handleChange(item.name, e.target.value)}
                            style={{ marginRight: '10px' }}
                        />
                    </div>
                ))}
            </form>

        </div>
    );
};