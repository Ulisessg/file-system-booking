import React from 'react';
import ReactDom from 'react-dom';

//Estilos
import '../../styles/default-styles.css';

//Componentes
import Header from '../../components/common/Header';
import FormularioBusqueda from '../../components/hotel/FormularioBusqueda';

ReactDom.render(
  <>
    <Header />
    <FormularioBusqueda />
  </>,
  document.getElementById('root'),
);
