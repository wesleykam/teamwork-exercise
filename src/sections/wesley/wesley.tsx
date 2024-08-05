import { useState } from 'react';

import './wesley.css';

const wesley = () => {
    // Create the count state that will be updated when the button is clicked
    // This will be extremely useful in our project
    // https://legacy.reactjs.org/docs/hooks-state.htmlZ
    const [count, setCount] = useState(0);

    return (
        <div className="wesley-section">
            <h2>Wesley's Section</h2>
            <p>Count: {count}</p>
        </div>
    );
};

export default wesley;
