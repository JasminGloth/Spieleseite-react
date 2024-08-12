import React, { useState } from 'react';
import preise from "../data/rust/preise.json";

interface PreisItem {
    name: string;
    einkaufspreis: number;
    verkaufspreis: number;
}

export const PageRustEconomieRechner: React.FC = () => {
    // Zustand für die Eingabewerte
    const [values, setValues] = useState<Record<string, string>>({});

    // Funktion zum Aktualisieren der Werte
    const handleChange = (name: string, value: string) => {
        setValues({
            ...values,
            [name]: value
        });
    };

    // Berechnung des Gesamtpreises
    const calculateTotalPrice = (): { einkaufsGesamt: number; verkaufsGesamt: number } => {
        return preise.reduce((totals, item: PreisItem) => {
            const quantity = values[item.name] ? parseFloat(values[item.name]) : 0;
            totals.einkaufsGesamt += quantity * item.einkaufspreis;
            totals.verkaufsGesamt += quantity * item.verkaufspreis;
            return totals;
        }, { einkaufsGesamt: 0, verkaufsGesamt: 0 });
    };

    // Funktion zum Leeren der Felder
    const clearFields = () => {
        setValues({});
    };

    const totals = calculateTotalPrice();

    return (
        <div className="page pageRustEconomieRechner">
            <h1>Rust Ökonomie Rechner</h1>
            <form>
                {preise.map((item: PreisItem) => (
                    <div key={item.name} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <input 
                            type="number" 
                            min="0" 
                            step="any" 
                            placeholder={`Menge ${item.name}`} 
                            value={values[item.name] || ''} // Wert aus dem Zustand setzen
                            onChange={(e) => handleChange(item.name, e.target.value)} 
                            style={{ marginRight: '10px' }} 
                        />
                        <label>{item.name}</label>
                    </div>
                ))}
            </form>
            <h2>Gesamt Einkaufspreis: {totals.einkaufsGesamt.toFixed(2)} Coins</h2>
            <h2>Gesamt Verkaufspreis: {totals.verkaufsGesamt.toFixed(2)} Coins</h2>
            <button onClick={clearFields} style={{ marginTop: '20px' }}>Felder leeren</button>
        </div>
    );
};