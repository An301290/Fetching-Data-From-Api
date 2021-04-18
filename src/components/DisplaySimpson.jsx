import React from 'react';

const DisplaySimpson = ({simpson}) => {
  return (
    simpson && (
      <div className="card">
        <h2 className="name">{simpson.character}</h2>
        <div
          className={
            simpson.characterDirection === 'Right'
              ? 'container-right'
              : 'container-left'
          }
        >
          <img className="character-img" alt="character" src={simpson.image} />
          <div className="quote-div">
            <p className="quote">{simpson.quote}</p>
          </div>
       </div>
      </div>
    )
  );
};

export default DisplaySimpson;