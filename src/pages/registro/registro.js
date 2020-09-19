import React from 'react';
import ReactDom from 'react-dom';

import Header from '../../components/common/Header';
import Formulario from '../../components/registro/Formulario';

ReactDom.render(
  <>
    <Header />
    <Formulario />
  </>,
  document.getElementById('root'),
);
