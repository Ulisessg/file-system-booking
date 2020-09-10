import React from 'react';

import '../../styles/informacion.css';

const Informacion = () => {
  return (
    <>
      <section className='informacion section'>
        <h1>Información</h1>
        <table className='tabla1'>
          <tbody>
            <tr>
              <th>Ubicación</th>
            </tr>
            <tr>
              <th>Fecha de entrada</th>
            </tr>
            <tr>
              <th>Fecha de salida</th>
            </tr>
            <tr>
              <th>Precio</th>
            </tr>
            <tr>
              <th>Huespedes</th>
            </tr>
          </tbody>
        </table>
        <table className='tabla2'>
          <tbody>
            <tr>
              <td>Lomas</td>
            </tr>
            <tr>
              <td>
                <td>12-2-2020</td>
              </td>
            </tr>
            <tr>
              <td>
                <td>13-2-2020</td>
              </td>
            </tr>
            <tr>
              <td>
                <td>$3500</td>
              </td>
            </tr>
            <tr>
              <td>
                <td>2</td>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Informacion;
