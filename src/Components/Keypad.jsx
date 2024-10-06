import { React } from 'react';
import BasicKeys from '/src/Components/Keys/BasicKeys.jsx';
import FunctionalKeys from '/src/Components/Keys/FunctionalKeys.jsx';

function Keypad() {
  return (
    <div className="keypad grid">
      <BasicKeys />       
      <FunctionalKeys />       
    </div>
  );
}

export default Keypad;