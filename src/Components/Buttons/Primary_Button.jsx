import { React } from 'react';

function PrimaryButton({btnText}) {
  return (
    <button className="button primary-button font-extrabold"> 
      {btnText}
    </button>
  );
}

export default PrimaryButton;