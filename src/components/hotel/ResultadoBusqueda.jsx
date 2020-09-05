import React, { PureComponent } from 'react';

import '../../styles/resultadoBusqueda.css';

import hotel from '../../img/hotel.jpg';

class ResultadoBusqueda extends PureComponent {
  render() {
    return (
      <div className='resultado'>
        <img className='resultado__img' src={hotel} alt='Imagen de hotel' />
        <br />
        <table className='info'>
          <thead>
            <tr>
              <th>
                <h2>Nombre de hotel</h2>
              </th>
            </tr>
          </thead>
          <tbody className='detalles'>
            <tr>
              <td>
                <p>
                  <strong>Precio: </strong>
                  <strong>{Math.floor(Math.random() * 1200)}</strong>
                </p>
              </td>
              <td>
                <p>
                  <strong>Huespedes: </strong>
                  <strong>
                    {Math.floor(Math.random() * (2000 - 500) + 500)}
                  </strong>
                </p>
              </td>
              <td>
                <p>
                  <strong>Ubicación: </strong>
                  <strong>Colombia</strong>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ResultadoBusqueda;