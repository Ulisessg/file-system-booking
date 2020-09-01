import React from 'react';

import '../../styles/FormularioBusqueda.css';

class FormularioBusqueda extends React.PureComponent {
  // eslint-disable-next-line class-methods-use-this
  handleClick(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className='container'>
        <section className='formulario container'>
          <form method='POST'>
            {/* Ubicación */}
            <div className='form-group'>
              <label htmlFor='ubicacion'>
                Ubicación:
                <input
                  id='ubicacion'
                  type='text'
                  className='form-control'
                  placeholder='Ubicación'
                />
              </label>
            </div>

            {/* Fecha de entrada */}
            <div className='form-group date'>
              <label htmlFor='fechaEntrada'>
                Fecha de entrada:
                <input
                  id='fechaEntrada'
                  type='date'
                  className='form-control'
                  placeholder='fecha de entrada'
                />
              </label>
            </div>

            {/* Fecha de salida */}
            <div className='form-group date'>
              <label htmlFor='fechasalida'>
                Fecha de salida:
                <input
                  id='fechaSalida'
                  type='date'
                  className='form-control'
                  placeholder='Fecha de salida'
                />
              </label>
            </div>

            {/* Precio minimo */}
            <div className='form-group date'>
              <label htmlFor='pricioMinimo'>
                Precio minimo: $
                <input
                  id='pricioMinimo'
                  type='number'
                  className='form-control'
                  placeholder='Precio mínimo'
                />
              </label>
            </div>

            {/* Precio máximo */}
            <div className='form-group date'>
              <label htmlFor='pricioMaximo'>
                Precio máximo: $
                <input
                  id='pricioMaximo'
                  type='number'
                  className='form-control'
                  placeholder='Precio máximo'
                />
              </label>
            </div>

            {/* Huespedes */}
            <div className='form-group date'>
              <label htmlFor='huespedes'>
                Número de huespedes
                <input
                  id='huespedes'
                  type='number'
                  className='form-control'
                  placeholder='Número de huespedes'
                />
              </label>
            </div>

            {/* Boton enviar */}
            <button
              type='submit'
              className='btn btn-primary buscar'
              onClick={this.handleClick}
            >
              Buscar
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default FormularioBusqueda;
