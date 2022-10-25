import { IGentleman } from "../model/data";
export function ButtonGentleman({ men }: { men: IGentleman }) {
    function handleButtonDelete(men: IGentleman) {}

    function handleButtonFav(men: IGentleman) {}
    return (
        <>
            <i
                onClick={() => {
                    handleButtonFav(men);
                }}
                className="icon gentleman__icon fas fa-check"
            ></i>
            <i
                onClick={() => {
                    handleButtonDelete(men);
                }}
                className="icon gentleman__icon gentleman__icon--delete fas fa-times"
            ></i>
        </>
    );
}
