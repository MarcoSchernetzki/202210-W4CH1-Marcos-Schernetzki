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
    function handleButtonDelete(state: IGentleman[], id: number) {
        const newState = [...state];
        const filterState = newState.filter((men) => men.id !== id);
        setState(filterState);
    }

    function handleButtonFav(state: IGentleman[], id: number) {
        const newState = [...state];

        newState.forEach((men) => {
            if (men.id === id) {
                men.selected = !men.selected;
                console.log(men.selected);
            }
        });
        setState(newState);
    }
    return (
        <>
            <i
                onClick={() => {
                    handleButtonFav(state, id);
                }}
                className="icon gentleman__icon fas fa-check"
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
