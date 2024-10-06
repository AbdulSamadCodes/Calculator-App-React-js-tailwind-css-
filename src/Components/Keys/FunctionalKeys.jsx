import { React } from 'react';
import ResetButton from '/src/Components/Buttons/Reset_Button.jsx';
import EqualsButton from '/src/Components/Buttons/EqualsButton.jsx';
import buttons from '/src/Components/Buttons/buttons.js';

function FunctionalKeys() {
  return (
    <div className="functional-keys grid">
      <ResetButton btnText={buttons["reset-button"]}/>
      <EqualsButton btnText={buttons["equal-button"]}/>
    </div>
  );
}

export default FunctionalKeys;