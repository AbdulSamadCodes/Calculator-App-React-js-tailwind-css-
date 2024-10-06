import { React } from 'react';

function DELButton({btnText}) {
  return (
    <button className="button DEL-button font-extrabold">
        {btnText}
    </button>
  );
}

export default DELButton;