import React from 'react';
import ReactDom from 'react-dom';

//Estilos
import '../../styles/default-styles.css';

//Componentes
import Header from '../../components/common/Header';
import FormularioBusqueda from '../../components/hotel/FormularioBusqueda';
import ResultadoBusqueda from '../../components/hotel/ResultadoBusqueda';

ReactDom.render(
  <>
    <Header />
    <FormularioBusqueda />
    <ResultadoBusqueda />
  </>,
  document.getElementById('root'),
);
