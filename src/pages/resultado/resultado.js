import React from 'react';
import ReactDom from 'react-dom';

//Componentes
import Header from '../../components/common/Header';
import Card from '../../components/resultado/Card';

ReactDom.render(
  <>
    <Header />
    <Card />
  </>,
  document.getElementById('root'),
);
