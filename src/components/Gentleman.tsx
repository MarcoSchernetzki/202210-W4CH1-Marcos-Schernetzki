import { IGentleman, data } from "../model/data";

export function Gentleman() {
    return (
        <>
            <li className="gentleman">
                <div className="gentleman__avatar-container">
                    <img
                        className="gentleman__avatar"
                        src={"img/" + data[1].picture}
                        alt="The Fary pointing at you"
                    />
                    <span className="gentleman__initial">
                        {data[1].name.slice(4, 5)}
                    </span>
                </div>
                <div className="gentleman__data-container">
                    <h2 className="gentleman__name">
                        {data[1].name.slice(0, 8)}
                    </h2>
                    <ul className="gentleman__data-list">
                        <li className="gentleman__data">
                            <span className="gentleman__data-label">
                                Profession:
                            </span>
                            {data[1].profession}
                        </li>
                        <li className="gentleman__data">
                            <span className="gentleman__data-label">
                                Status:
                            </span>
                            {data[1].status}
                        </li>
                        <li className="gentleman__data">
                            <span className="gentleman__data-label">
                                Twitter:
                            </span>
                            {data[1].twitter}
                        </li>
                    </ul>
                </div>
                <i className="icon gentleman__icon fas fa-check"></i>
                <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
            </li>
        </>
    );
}
