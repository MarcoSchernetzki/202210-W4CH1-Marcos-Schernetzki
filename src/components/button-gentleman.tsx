import { IGentleman } from "../model/data";
export function ButtonGentleman({
    state,
    setState,
}: {
    state: IGentleman[];
    setState: React.Dispatch<React.SetStateAction<IGentleman[]>>;
}) {
    function handleButtonDelete(state: IGentleman[]) {}

    function handleButtonFav(state: IGentleman[]) {}
    return (
        <>
            <i
                onClick={() => {
                    handleButtonFav(state);
                }}
                className="icon gentleman__icon fas fa-check"
            ></i>
            <i
                onClick={() => {
                    handleButtonDelete(state);
                }}
                className="icon gentleman__icon gentleman__icon--delete fas fa-times"
            ></i>
        </>
    );
}
