import React from 'react';

class Opciones extends React.PureComponent {
  handleClick(event) {
    event.preventDefault();
    this.event = event;
  }

  render() {
    return (
      <>
        {/* Precio minimo */}
        <div className='form-group expand'>
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
        <div className='form-group expand'>
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
        <div className='form-group expand'>
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
          className='btn btn-primary'
          onClick={this.handleClick}
        >
          Buscar
        </button>
      </>
    );
  }
}

export default Opciones;
