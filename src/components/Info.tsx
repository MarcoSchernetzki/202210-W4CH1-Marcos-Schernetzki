import { useState } from "react";
import { data } from "../model/data";
import { Gentleman } from "./Gentleman";

export function Info() {
    const title: string = `The pointing gentlemen`;

    const [gentlemanState, setState] = useState(data);

    return (
        <>
            <header className="main-header">
                <h1 className="main-title">{title}</h1>
            </header>
            <section className="controls">
                <p className="info">
                    {gentlemanState.filter((men) => men.selected === true)
                        .length + " gentlemen pointing at you"}
                </p>
                <button className="button button--select">Select all</button>
            </section>
            <main className="main">
                <ul className="gentlemen">
                    {gentlemanState.map((men) => (
                        <Gentleman
                            men={men}
                            state={[gentlemanState, setState]}
                        ></Gentleman>
                    ))}
                </ul>
            </main>
        </>
    );
}
