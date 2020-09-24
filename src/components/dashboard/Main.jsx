import React from 'react';

import '../../styles/dashboard.css';

export default function Main() {
  const hoteles = Math.round(Math.random() * (6 - 0) + 0);
  const habitaciones = hoteles * 3;
  const habitacionesDisponibles = habitaciones * 3 - 2;
  const habitacionesReservadas = habitaciones * 3 + 1;
  const precioHabitacion = Math.round(Math.random() * 3000);
  const ganancias = precioHabitacion * (habitaciones + habitacionesReservadas);

  return (
    <>
      <main className='main' role='main'>
        <h1>Mis estadisticas</h1>
        <div className='data'>
          <section className='border-0 shadow-sm mb-4'>
            <h3>Ganancias totales</h3>
            <div>
              <p>
                <strong>{`$: ${ganancias}`}</strong>
              </p>
            </div>
          </section>
          <section className='border-0 shadow-sm mb-4'>
            <div>
              <h3>Hoteles publicados</h3>
              <div>
                <p>
                  <strong>{`${hoteles} Hoteles`}</strong>
                </p>
              </div>
            </div>
          </section>
          <section className='border-0 shadow-sm mb-4'>
            <h3>Habitaciones reservadas</h3>
            <div>
              <p>
                <strong>{`${habitaciones} habitaciones`}</strong>
              </p>
            </div>
          </section>
          <section className='border-0 shadow-sm mb-4'>
            <div>
              <h3>Habitaciones disponibles</h3>
              <div>
                <p>
                  <strong>{`${habitacionesDisponibles} habitaciones disponibles`}</strong>
                </p>
              </div>
            </div>
          </section>
          <section className='border-0 shadow-sm mb-4'>
            <div>
              <h3>Habitaciones reservadas</h3>
              <div>
                <p>
                  <strong>{`${habitacionesReservadas} Habitaciones reservadas`}</strong>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
