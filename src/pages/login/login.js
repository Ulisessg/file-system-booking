import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

import Header from '../../components/common/Header';

ReactDom.render(<Header />, document.getElementById('header'));

const email = document.getElementById('inputEmail');
const password = document.getElementById('inputPassword4');
const button = document.getElementById('login');

function handleSubmit(event) {
  event.preventDefault();
  const data = { email: email.value, password: password.value };

  axios
    .post('http://34.71.227.39:5000/api/auth/login', data)
    .then((response) => {
      console.log(response.data);
    })
    .then(() => {
      sessionStorage.setItem('Usuario', data);
      const user = sessionStorage.getItem('Usuario');
      console.log(user);
    })
    .catch((error) => {
      console.log(error, 'Usuario no existe, Registralo :D');
    });
}

button.addEventListener('click', handleSubmit);
