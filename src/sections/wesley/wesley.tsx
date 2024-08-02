import { useState } from 'react';

import './wesley.css'

const wesley = () => {
    
    const [count, setCount] = useState(0);

    const onClick = () => {
        setCount(count + 1);
    }

    return (
        <div className="wesley-section">
            <h2>Wesley's Section</h2>
        </div>
    );
};

export default wesley;
