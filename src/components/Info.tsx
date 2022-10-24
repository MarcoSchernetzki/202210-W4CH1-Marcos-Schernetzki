import { Gentleman } from "./Gentleman";

export function Info() {
    const title: string = `The pointing gentlemen`;

    return (
        <>
            <header className="main-header">
                <h1 className="main-title">{title}</h1>
            </header>
            <section className="controls">
                <p className="info">0 gentlemen pointing at you</p>
                <button className="button button--select">Select all</button>
            </section>
            <main className="main">
                <ul className="gentlemen">
                    <Gentleman></Gentleman>
                </ul>
            </main>
        </>
    );
}
