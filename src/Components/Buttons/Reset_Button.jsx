import { React } from 'react';

function ResetButton({ btnText }) {
  return (
    <button className="button reset-button font-extrabold">
      {btnText}
    </button>
  );
} 

export default ResetButton;