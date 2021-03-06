import React from 'react';

import '../../styles/FormularioBusqueda.css';

import Boton from '../resultado/Boton';

const FormularioPago = () => {
  return (
    <>
      <section className='formulario container'>
        <form name='form'>
          <div className='form-group expand'>
            <label htmlFor='card'>
              Nombre en la tarjeta:
              <input
                name='prop'
                id='prop'
                type='text'
                className='form-control'
                placeholder='Ejemplo: Estefania Lopez Perez'
              />
            </label>
          </div>
          <div className='form-group expand'>
            <label htmlFor='card'>
              Número de tarjeta:
              <input
                name='card'
                id='card'
                type='tel'
                className='form-control'
                placeholder='xxx-xxx-xxx-xxx-xxx'
              />
            </label>
          </div>
          <div className='form-group expand'>
            <label htmlFor='exp'>
              Fecha de expiración:
              <input
                name='exp'
                id='exp'
                type='month'
                className='form-control'
              />
            </label>
          </div>
          <Boton value='Pagar' redirect='/buscar.html' />
        </form>
      </section>
    </>
  );
};

export default FormularioPago;
