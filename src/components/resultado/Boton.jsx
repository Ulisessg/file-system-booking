import React from 'react';

import '../../styles/card.css';

const Boton = (props) => {
  const { prevent, value } = props;

  return (
    <div className='boton_conatiner'>
      <a href='./pago.html'>
        {prevent ? (
          <button
            className='btn btn-primary btn-lg'
            type='button'
            onClick={(event) => event.preventDefault()}
          >
            {value}
          </button>
        ) : (
          <button className='btn btn-primary btn-lg' type='button'>
            {value}
          </button>
        )}
      </a>
    </div>
  );
};

export default Boton;
