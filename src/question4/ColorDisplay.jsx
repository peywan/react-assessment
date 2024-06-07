import { useContext } from "react";
import { ColorContext } from "./colorContext";

const ColorDisplay = () => {
    const { color } = useContext(ColorContext);

    return (
        <div>
            <p>Favoritfärg: {color}</p>
        </div>
    );
};

export default ColorDisplay;
