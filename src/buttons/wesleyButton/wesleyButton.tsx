import './wesleyButton.css';

// Set the types for the props that will be passed to the component
// This is not technically necessary but it is a good practice in typescript
// Defining types will make the editor provide better intellisense and error checking
interface WesleyButtonProps {
    clickHandler: () => void;
}

const wesleyButton = ({clickHandler}: WesleyButtonProps) => {
  return (
    <div>
        <button onClick={clickHandler}>Click me!</button>
    </div>
  )
}

export default wesleyButton
