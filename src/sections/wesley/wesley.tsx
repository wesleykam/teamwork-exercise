import WesleyButton from '../../components/buttons/wesley-button/wesleyButton';
import { useState } from 'react';

import './wesley.css';

const wesley = () => {
    const [count, setCount] = useState(0);

    const onClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Wesley's Section</h2>
            <WesleyButton stateChange={onClick} />
            <p>Count: {count}</p>
        </div>
    );
};

export default wesley;
