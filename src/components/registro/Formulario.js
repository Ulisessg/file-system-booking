/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import axios from 'axios';

import '../../styles/FormularioBusqueda.css';

const Formulario = () => {
  //account_type_id

  const [accountTypeId] = useState(2);
  const [active] = useState(1);
  const [address] = useState('w');
  const [cityId] = useState(1028);
  const [createdAt] = useState('e');
  const [email, setEmail] = useState('');
  const [id] = useState('1');
  const [lastName, setLastName] = useState('r');
  const [lastLocation] = useState(3);
  const [longLocation] = useState(4);
  const [name, setName] = useState('t');
  const [password, setPassword] = useState('y');
  const [phoneNumber] = useState('y');
  const [profileImageUrl] = useState('u');
  const [updatedAt] = useState('u');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(token);
    const dataUSer = {
      account_type_id: accountTypeId,
      active,
      address,
      city_id: cityId,
      created_at: createdAt,
      email,
      id,
      name,
      last_name: lastName,
      lat_location: lastLocation,
      long_location: longLocation,
      password,
      phone_number: phoneNumber,
      profile_image_url: profileImageUrl,
      updated_at: updatedAt,
    };

    console.log(dataUSer);
  };

  return (
    <>
      <section className='formulario container'>
        <form name='form'>
          <div className='form-group expand'>
            <label htmlFor='email'>
              Email:
              <input
                name='email'
                id='email'
                type='email'
                className='form-control'
                placeholder='Email'
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
          </div>
          <div className='form-group expand'>
            <label htmlFor='nombre'>
              Nombre:
              <input
                name='nombre'
                id='nombre'
                type='text'
                className='form-control fecha'
                placeholder='Nombre'
                onChange={(event) => setName(event.target.value)}
              />
            </label>
          </div>
          {/* Fecha de salida */}
          <div className='form-group expand'>
            <label htmlFor='last_name'>
              Fecha de salida:
              <input
                name='last_name'
                id='last_name'
                type='text'
                className='form-control fecha'
                placeholder='Apellido'
                onChange={(event) => setLastName(event.target.value)}
              />
            </label>
          </div>
          <div className='form-group expand'>
            <label htmlFor='password'>
              Contraseña:
              <input
                name='password'
                id='password'
                type='password'
                className='form-control fecha'
                placeholder='Contraseña'
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
          </div>
        </form>
        <button
          className='btn btn-primary btn-lg'
          type='submit'
          onClick={handleSubmit}
          style={{ margin: '10 10 0 0' }}
        >
          Registrar
        </button>
      </section>
    </>
  );
};

export default Formulario;
