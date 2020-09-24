import React from 'react';
import ReactDom from 'react-dom';

import Header from '../../components/common/Header';
import FormularioPago from '../../components/pago/FormularioPago';

ReactDom.render(
  <>
    <Header />
    <FormularioPago />
  </>,
  document.getElementById('root'),
);

ReactDom.createPortal(<h1>Hello</h1>, document.getElementById('port'));
