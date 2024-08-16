import { useState } from 'react';

import './priscilla.css';
import PriscillaButton from "../../buttons/priscillaButton/priscillaButton.tsx";

function priscilla() {
    // Create the count state that will be updated when the button is clicked
    // This will be extremely useful in our project
    // https://legacy.reactjs.org/docs/hooks-state.htmlZ
    const [count, setCount] = useState(0);

    // Function to update the count state when the button is clicked
    // Updating the count will cause the component to re-render
    const onClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="priscilla-section">
            <h2>Priscilla's Section</h2>
            {/* Render the Button Component and Pass a function to the component */}
            <PriscillaButton handleClick={onClick} />
            <p>Count: {count}</p>
        </div>
    );
}

export default priscilla;
