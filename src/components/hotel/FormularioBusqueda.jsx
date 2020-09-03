/* eslint-disable react/destructuring-assignment */
import React from 'react';

import '../../styles/FormularioBusqueda.css';

import Opciones from './Opciones';

class FormularioBusqueda extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      showOptions: false,
      showButtonSearch: true,
    };
    this.handleOptions = this.handleOptions.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.event = event;
  }

  handleOptions() {
    const { showOptions } = this.state;
    if (showOptions) {
      this.setState({
        showOptions: false,
        showButtonSearch: true,
      });
    } else {
      this.setState({
        showOptions: true,
        showButtonSearch: false,
      });
    }
  }

  render() {
    return (
      <section className='container'>
        <h1 className='busca'>Busca tu hotel ideal</h1>

        <section className='formulario container'>
          <form method='GET'>
            {/* Ubicación */}
            <div className='form-group expand'>
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
            <div className='form-group expand'>
              <label htmlFor='fechaEntrada'>
                Fecha de entrada:
                <input
                  id='fechaEntrada'
                  type='date'
                  className='form-control fecha'
                  placeholder='fecha de entrada'
                />
              </label>
            </div>

            {/* Fecha de salida */}
            <div className='form-group expand'>
              <label htmlFor='fechasalida'>
                Fecha de salida:
                <input
                  id='fechaSalida'
                  type='date'
                  className='form-control fecha'
                  placeholder='Fecha de salida'
                />
              </label>
            </div>

            {/* Boton enviar */}
            {this.state.showButtonSearch && (
              <>
                <button
                  type='submit'
                  className='btn btn-primary'
                  onClick={this.handleClick}
                >
                  Buscar
                </button>
              </>
            )}

            {/* Mas opciones */}
            <button
              type='button'
              className='btn btn-secondary masOpciones'
              onClick={this.handleOptions}
            >
              {this.state.showOptions ?
                'Mostrar menos opciones' :
                'Mostrar más opciones'}
            </button>

            {this.state.showOptions && <Opciones />}
          </form>
        </section>
      </section>
    );
  }
}

export default FormularioBusqueda;
