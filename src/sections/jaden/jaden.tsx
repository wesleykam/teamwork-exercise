import { useState } from "react";

import "./jaden.css";

import JadenButton from "../../buttons/jadenButtton/jadenButton.tsx";

const jaden = () => {
  // Create the count state that will be updated when the button is clicked
  // This will be extremely useful in our project
  // https://legacy.reactjs.org/docs/hooks-state.htmlZ
  const [count, setCount] = useState(0);

  return (
    <div className="jaden-section">
      <h2>Jaden's Section</h2>
      <JadenButton
        handleClick={() => {
          setCount(count + 1);
        }}
      />
      <p>Count: {count}</p>
    </div>
  );
};

export default jaden;
