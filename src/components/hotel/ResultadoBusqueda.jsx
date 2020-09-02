import React, { PureComponent } from 'react';

import '../../styles/resultadoBusqueda.css';
// import Hotel from './hotel.jpg';

import hotel from '../../img/hotel.jpg';

class ResultadoBusqueda extends PureComponent {
  render() {
    return (
      <section>
        <div>
          <img src={hotel} alt='Imagen de hotel' />
          <div>
            <table>
              <thead>
                <tr>
                  <th>Nombre de hotel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Precio</td>
                  <td>Huespedes</td>
                  <td>Ubicación</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
}

export default ResultadoBusqueda;
