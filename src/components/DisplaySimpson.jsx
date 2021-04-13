import React from 'react';

function DisplaySimpson({simpson}) {
  return (
    simpson && (
      <div className='DisplaySimpson'>
        <img src={simpson.image} alt={simpson} />
          <div>
            Quote: {simpson.quote}
            Character: {simpson.character}
            Character Direction: {simpson.characterDirection}
       </div>
      </div>
    )
  );
}

export default DisplaySimpson;