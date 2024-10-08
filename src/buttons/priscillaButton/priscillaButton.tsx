import "./priscillaButton.css";

// Set the types for the props that will be passed to the component
// This is not technically necessary but it is a good practice in typescript
// Defining types will make the editor provide better intellisense and error checking
interface PriscillaButtonProps {
  handleClick: () => void;
}

const PriscillaButton = ({ handleClick }: PriscillaButtonProps) => {
  return (
    <div>
      <button onClick={handleClick}>Click ME!</button>
    </div>
  );
};

export default PriscillaButton;
