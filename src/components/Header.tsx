export function Header() {
    const title: string = `The pointing gentlemen`;

    return (
        <>
            <div className="container">
                <header className="main-header">
                    <h1 className="main-title">{title}</h1>
                </header>
            </div>
        </>
    );
}
