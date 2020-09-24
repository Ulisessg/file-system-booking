import React from 'react';

import '../../styles/card.css';

import Carrusel from './Carrusel';
import Informacion from './Informacion';
import Iframe from './Iframe';
import Datos from './Datos';
import Boton from './Boton';

const Card = () => {
  return (
    <main role='main' className='principal'>
      <h1>Nombre del Hotel</h1>
      <Carrusel />
      <Informacion />
      <Iframe />
      <Datos />
      <Boton value='Reserva ahora!' prevent={false} redirect='./pago.html' />
    </main>
  );
};

export default Card;
