import React, { useState } from 'react';
import preise from "../data/rust/preise.json";

export const PageRustEconomieRechner = () => {
    // Zustand für die Eingabewerte
    const [values, setValues] = useState({});

    // Funktion zum Aktualisieren der Werte
    const handleChange = (name, value) => {
        setValues({
            ...values,
            [name]: value
        });
    };

    // Berechnung des Gesamtpreises
    const calculateTotalPrice = () => {
        return preise.reduce((total, item) => {
            const quantity = values[item.name] ? parseFloat(values[item.name]) : 0;
            return total + (quantity * item.einkaufspreis);
        }, 0).toFixed(2); // auf 2 Dezimalstellen runden
    };

    // Funktion zum Leeren der Felder
    const clearFields = () => {
        setValues({});
    };

    return (
        <div className="page pageRustEconomieRechner">
            <h1>Rust Ökonomie Rechner</h1>
            <form>
                {preise.map(item => (
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
            <h2>Gesamtpreis: {calculateTotalPrice()} Coins</h2>
            <button onClick={clearFields} style={{ marginTop: '20px' }}>Felder leeren</button>
        </div>
    );
};