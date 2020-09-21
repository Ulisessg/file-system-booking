/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import axios from 'axios';

const Formulario = () => {
  //account_type_id
  const [accountTypeId] = useState(2);
  const [active] = useState(1);
  const [address] = useState('w');
  const [cityId] = useState(1028);
  const [createdAt] = useState('e');
  const [email] = useState('asdffgdasfdsfds');
  const [id] = useState('1');
  const [lastName] = useState('r');
  const [lastLocation] = useState(3);
  const [longLocation] = useState(4);
  const [name, setName] = useState('t');
  const [password, setPassword] = useState('y');
  const [phoneNumber] = useState('y');
  const [profileImageUrl] = useState('u');
  const [updatedAt] = useState('u');

  const handleChange = (event, usuario) => {
    setName(event.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
    axios
      .post('http://34.71.227.39:5000/api/auth/signup', dataUSer)
      .then((response) => console.log(response.data.msg));
  };

  return (
    <>
      <form>
        <input
          type='text'
          id='usuario'
          placeholder='Nombre'
          onChange={() => handleChange(event, 'name')}
        />
        <input
          type='text'
          id='usuario'
          placeholder='Nombre'
          onChange={() => handlePassword(event, 'name')}
        />
        <button type='submit' onClick={handleSubmit}>
          Registate
        </button>
      </form>
    </>
  );
};

export default Formulario;
