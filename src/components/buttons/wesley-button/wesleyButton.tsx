import './wesleyButton.css'

interface WesleyButtonProps {
  stateChange: () => void
}

const wesleyButton = ({stateChange}: WesleyButtonProps) => {
  return (
    <button className="wesley-button" onClick={stateChange}>Wesley Button</button>
  )
}

export default wesleyButton
