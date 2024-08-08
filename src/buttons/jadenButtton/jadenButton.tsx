import "./jadenButton.css";

// Set the types for the props that will be passed to the component
// This is not technically necessary but it is a good practice in typescript
// Defining types will make the editor provide better intellisense and error checking
interface JadenButtonProps {
  handleClick: () => void;
}

const JadenButton = ({ handleClick }: JadenButtonProps) => {
  return (
    <div>
      <button onClick={handleClick}>Click ME!</button>
    </div>
  );
};

export default JadenButton;
