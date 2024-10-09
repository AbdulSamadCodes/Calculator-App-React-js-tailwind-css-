import { React } from 'react';
import PrimaryButton from '/src/Components/Buttons/Primary_Button.jsx';
import DELButton from '/src/Components/Buttons/DEL_Button.jsx';
import buttons from '/src/Components/Buttons/buttons.js';

function BasicKeys() {
  return (
    <div className="basic-keys grid">
      {buttons["primary-buttons"].map((btnText,index) => {
        return <PrimaryButton btnText={btnText} key={index}/>;
      })
      }
      <DELButton btnText={buttons["del-button"]} />
    </div>
  );
}

export default BasicKeys;