import { React } from 'react';
import Header from '/src/Components/Header.jsx';
import Calculator from '/src/Components/Calculator.jsx';

function Wrapper() {
  return (
    <div className="wrapper px-4 py-4">
      <Calculator />
    </div>
  );
}

export default Wrapper;