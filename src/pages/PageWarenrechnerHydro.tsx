import waren from '../data/hydroponics/waren.json'
import { useState } from "react";

export const PageWarenrechnerHydro = () => {
    const [prozent, setProzent] = useState(0);

    const handleProzentChange = (e: React.ChangeEvent) => {
        const _prozent = Number((e.target as HTMLInputElement).value);
        if (!Number.isNaN(_prozent)) {
            setProzent(_prozent);
        }
    }



    const data = waren.map((ware) => {
        const faktor = 1 + prozent / 100;
        const normal = Math.round(ware.normalpreis * faktor);
        const besonderer = Math.round(normal * 2);
        return { gruppe: ware.gruppe, name: ware.name, normal, besonderer, bild: ware.bild }
    });

    const pflanzen = data.filter(
        (ware) => ware.gruppe === "pflanzen"
    );

    const fische = data.filter(
        (ware) => ware.gruppe === "fische"
    );

    const produkte = data.filter(
        (ware) => ware.gruppe === "produkte"
    );

    const renderTable = (
        title: string,
        items: typeof data
    ) => (
        <section>
            <h3>{title}</h3>

            <table>
                <thead>
                    <tr>
                        <th>Bild</th>
                        <th>Ware</th>
                        <th>Normal</th>
                        <th>Besonders</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((ware) => (
                        <tr key={ware.name}>
                            <td>
                                <img
                                    src={ware.bild}
                                    alt={ware.name}
                                    width="32"
                                />
                            </td>

                            <td>{ware.name}</td>
                            <td>{ware.normal}</td>
                            <td>{ware.besonderer}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );

    { renderTable("Pflanzen", pflanzen) }
    { renderTable("Fische", fische) }
    { renderTable("Produkte", produkte) }

    const handleClear = () => {
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
                        id="prozent"
                        value={prozent}
                        onChange={(e) => handleProzentChange(e)}
                    />
                    %
                    <button onClick={() => handleClear()}>zurück setzen</button>
                </form>

                <div>

                    <section>
                        <h3>Pflanzen</h3>

                        <div className="waren-grid">
                            {pflanzen.map((ware) => (
                                <div className="waren-card" key={ware.name}>
                                    <img
                                        src={ware.bild}
                                        alt={ware.name}
                                    />

                                    <h4>{ware.name}</h4>

                                    <div>Normal: {ware.normal} $</div>
                                    <div>Spezial: {ware.besonderer} $</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
    <h3>Fische</h3>

    <div className="waren-grid">
        {fische.map((ware) => (
            <div className="waren-card" key={ware.name}>
                <img
                    src={ware.bild}
                    alt={ware.name}
                />

                <h4>{ware.name}</h4>

                <div>Normal: {ware.normal} $</div>
                <div>Spezial: {ware.besonderer} $</div>
            </div>
        ))}
    </div>
</section>

                    <section>
    <h3>Produkte</h3>

    <div className="waren-grid">
        {produkte.map((ware) => (
            <div className="waren-card" key={ware.name}>
                <img
                    src={ware.bild}
                    alt={ware.name}
                />

                <h4>{ware.name}</h4>

                <div>Normal: {ware.normal} $</div>
                <div>Spezial: {ware.besonderer} $</div>
            </div>
        ))}
    </div>
</section>

                </div>

            </div>
        </div>
    );
};