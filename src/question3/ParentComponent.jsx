import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const [color, setColor] = useState("");

    const handleColor = (color) => {
        setColor(color);
    };

    return (
        <div>
            <p>Favoritfärg: {color}</p>
            <ChildComponent handleColor={handleColor} />
        </div>
    );
};

export default ParentComponent;
