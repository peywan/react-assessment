import { useContext } from "react";
import { ColorContext } from "./colorContext";

const ColorSelector = () => {
    const { setColor } = useContext(ColorContext);

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    return (
        <div>
            <select onChange={handleColorChange}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
        </div>
    );
};

export default ColorSelector;
