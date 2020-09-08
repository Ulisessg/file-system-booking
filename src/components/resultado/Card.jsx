import React from 'react';

import '../../styles/carrusel.css';

//Imagenes
import hotel from '../../img/hotel.jpg';
import habitacion from '../../img/habitacion.jpg';
import registro from '../../img/registro.jpg';
import mostrador from '../../img/mostrador.jpg';

const Card = () => {
  return (
    <>
      <main id='main'>
        <div
          id='carousel'
          className='carousel slide'
          data-ride='carousel'
          data-pause='false'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img className='d-block w-100' src={hotel} alt='#' />
            </div>
            <div className='carousel-item'>
              <img className='d-block w-100' src={habitacion} alt='#' />
            </div>
            <div className='carousel-item'>
              <img className='d-block w-100' src={mostrador} alt='#' />
            </div>
            <div className='carousel-item'>
              <img className='d-block w-100' src={registro} alt='#' />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Card;
