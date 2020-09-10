import React from 'react';

import '../../styles/carrusel.css';

//Imagenes
import hotel from '../../img/hotel.jpg';
import habitacion from '../../img/habitacion.jpg';
import registro from '../../img/registro.jpg';
import mostrador from '../../img/mostrador.jpg';

const Carrusel = () => {
  return (
    <>
      <section className='carrusel section'>
        <div
          id='carouselExampleControls'
          className='carousel slide contenedor-carrusel'
          data-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img className='d-block w-100' src={hotel} alt='First slide' />
            </div>
            <div className='carousel-item'>
              <img
                className='d-block w-100'
                src={habitacion}
                alt='Second slide'
              />
            </div>
            <div className='carousel-item'>
              <img className='d-block w-100' src={registro} alt='Third slide' />
            </div>
            <div className='carousel-item'>
              <img
                className='d-block w-100'
                src={mostrador}
                alt='Third slide'
              />
            </div>
          </div>
          <a
            className='carousel-control-prev controles'
            href='#carouselExampleControls'
            role='button'
            data-slide='prev'
          >
            <span className='carousel-control-prev-icon' aria-hidden='true' />
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='carousel-control-next controles'
            href='#carouselExampleControls'
            role='button'
            data-slide='next'
          >
            <span className='carousel-control-next-icon' aria-hidden='true' />
            <span className='sr-only'>Next</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Carrusel;
