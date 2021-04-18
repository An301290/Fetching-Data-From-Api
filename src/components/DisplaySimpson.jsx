import React from 'react';

const DisplaySimpson = ({simpson}) => {
  return (
    simpson && (
      <div className="QuoteCard">
        <h2 className="cite">{simpson.character}</h2>
        <div
          className={
            simpson.characterDirection === 'Right'
              ? 'container-right'
              : 'container-left'
          }
        >
          <img className="QuoteCard img" alt="character" src={simpson.image} />
          <div className="quote-div">
            <p className="">{simpson.quote}</p>
          </div>
       </div>
      </div>
    )
  );
};

export default DisplaySimpson;