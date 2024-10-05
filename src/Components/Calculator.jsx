import { React } from 'react';
import Header from '/src/Components/Header.jsx';
import OutputWindow from '/src/Components/OutputWindow.jsx';
import Keypad from '/src/Components/Keypad.jsx';

function Calculator() {
  return (
    <div className="calculator grid gap-6 ms-auto me-auto">
      <Header />
      <OutputWindow />
    </div>
  );
}

export default Calculator;