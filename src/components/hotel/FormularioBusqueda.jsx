import React, { useState } from 'react';

import '../../styles/FormularioBusqueda.css';

const FormularioBusqueda = () => {
  //Estados
  const [showButtonSearch, setShowButtonSearch] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [ubicacion, setUbicacion] = useState('');
  const [fechaEntrada, setFechaEntrada] = useState('');
  const [fechaSalida, setFechaSalida] = useState('');
  const [precioMinimo, setPrecioMinimo] = useState('');
  const [precioMaximo, setPrecioMaximo] = useState('');
  const [huespedes, setHuespedes] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    //Ignorar regla hasta enviarla
    // eslint-disable-next-line no-unused-vars
    const data = {
      ubicacion,
      fechaEntrada,
      fechaSalida,
      precioMinimo,
      precioMaximo,
      huespedes,
    };
  };

  const handleOptions = () => {
    if (showOptions) {
      setShowOptions(false);
      setShowButtonSearch(true);
      //Valores iniciales
      setPrecioMaximo('');
      setPrecioMinimo('');
      setHuespedes('');
    } else {
      setShowOptions(true);
      setShowButtonSearch(false);
    }
  };

  return (
    <section className='container'>
      <h1 className='busca'>Busca tu hotel ideal</h1>

      <section className='formulario container'>
        <form name='form'>
          {/* Ubicación */}
          <div className='form-group expand'>
            <label htmlFor='ubicacion'>
              Ubicación:
              <input
                name='ubicacion'
                id='ubicacion'
                type='text'
                className='form-control'
                placeholder='Ubicación'
                onChange={(event) => setUbicacion(event.target.value)}
              />
            </label>
          </div>
          {/* Fecha de entrada */}
          <div className='form-group expand'>
            <label htmlFor='fechaEntrada'>
              Fecha de entrada:
              <input
                name='fechaEntrada'
                id='fechaEntrada'
                type='date'
                className='form-control fecha'
                placeholder='fecha de entrada'
                onChange={(event) => setFechaEntrada(event.target.value)}
              />
            </label>
          </div>
          {/* Fecha de salida */}
          <div className='form-group expand'>
            <label htmlFor='fechasalida'>
              Fecha de salida:
              <input
                name='fechaSalida'
                id='fechaSalida'
                type='date'
                className='form-control fecha'
                placeholder='Fecha de salida'
                onChange={(event) => setFechaSalida(event.target.value)}
              />
            </label>
          </div>
          {/* Boton enviar */}
          {showButtonSearch && (
            <>
              <button
                type='submit'
                className='btn btn-primary'
                onClick={(event) => {
                  handleClick(event);
                }}
              >
                Buscar Hoteles
              </button>
            </>
          )}

          {/* Mas opciones */}
          <button
            type='button'
            className='btn btn-secondary masOpciones'
            onClick={() => handleOptions()}
          >
            {showOptions ? 'Mostrar menos opciones' : 'Mostrar más opciones'}
          </button>

          {showOptions && (
            <>
              {/* Precio minimo */}
              <div className='form-group expand'>
                <label htmlFor='pricioMinimo'>
                  Precio minimo: $
                  <input
                    name='precioMinimo'
                    id='pricioMinimo'
                    type='number'
                    className='form-control'
                    placeholder='Precio mínimo'
                    onChange={(event) => setPrecioMinimo(event.target.value)}
                  />
                </label>
              </div>

              {/* Precio máximo */}
              <div className='form-group expand'>
                <label htmlFor='precioMaximo'>
                  Precio máximo: $
                  <input
                    name='precioMaximo'
                    id='pricioMaximo'
                    type='number'
                    className='form-control'
                    placeholder='Precio máximo'
                    onChange={(event) => setPrecioMaximo(event.target.value)}
                  />
                </label>
              </div>

              {/* Huespedes */}
              <div className='form-group expand'>
                <label htmlFor='huespedes'>
                  Número de huespedes
                  <input
                    name='huespedes'
                    id='huespedes'
                    type='number'
                    className='form-control'
                    placeholder='Número de huespedes'
                    onChange={(event) => setHuespedes(event.target.value)}
                  />
                </label>
              </div>
              {/* Boton enviar */}
              <button
                type='submit'
                className='btn btn-primary'
                onClick={(event) => handleClick(event)}
              >
                Buscar Hoteles
              </button>
            </>
          )}
        </form>
      </section>
    </section>
  );
};

export default FormularioBusqueda;
