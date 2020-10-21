import React from 'react';

const validation = (props) => {
  let validationMessage = 'Text long enough';

  if (props.inputLength <=5) {
    validationMessage = 'Text too short';
  }

  return (
    <div>
      {
        <p>{validationMessage}</p>

        // same as below, create a jsx instead
        // props.inputLength > 5 ? 
        //     <p>Text Long Enough</p> : 
        //     <p>Text Too Short</p>
      }
    </div>
  )
};

export default validation;
