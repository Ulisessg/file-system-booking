import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

import Header from '../../components/common/Header';

ReactDom.render(<Header />, document.getElementById('header'));

function handleSubmit(event) {
  event.preventDefault();
  const data = { email: email.value, password: password.value };

  axios
    .post('http://34.123.42.82:5000//api/auth/login', data)
    .then((response) => {
      console.log(response.data);
    })
    .then(() => {
      sessionStorage.setItem('Usuario', data);
      const user = sessionStorage.getItem('Usuario');
      console.log(user);
    })
    .then(() => {
      if (window.sessionStorage.length === 1) {
        window.location.assign('/dashboard.html');
      }
    })
    .catch((error) => {
      console.log(error, 'Usuario no existe, Registralo :D');
    });
}

const email = document.getElementById('inputEmail');
const password = document.getElementById('inputPassword4');
const button = document.getElementById('login');
button.addEventListener('click', handleSubmit);
