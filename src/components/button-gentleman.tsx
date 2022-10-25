import { SyntheticEvent, useState } from "react";
import { IGentleman } from "../model/data";
export function ButtonGentleman({
    state,
    setState,
    id,
}: {
    state: IGentleman[];
    setState: React.Dispatch<React.SetStateAction<IGentleman[]>>;
    id: number;
}) {
    const [toggle, setToggle] = useState(true);

    function handleButtonDelete(state: IGentleman[], id: number) {
        const newState = [...state];
        const filterState = newState.filter((men) => men.id !== id);
        setState(filterState);
    }

    function handleButtonFav(
        state: IGentleman[],
        id: number,
        ev: SyntheticEvent
    ) {
        const newState = [...state];
        console.log(ev.nativeEvent.target);
        newState.forEach((men) => {
            if (men.id === id) {
                men.selected = !men.selected;
                console.log(men.selected);
            }
        });
        setState(newState);
        setToggle(!toggle);
    }
    return (
        <>
            <i
                onClick={(ev) => {
                    handleButtonFav(state, id, ev);
                }}
                className={`icon gentleman__icon fas fa-check ${
                    toggle ? "nofav" : "fav"
                }`}
            ></i>
            <i
                onClick={() => {
                    handleButtonDelete(state, id);
                }}
                className="icon gentleman__icon gentleman__icon--delete fas fa-times"
            ></i>
        </>
    );
}
