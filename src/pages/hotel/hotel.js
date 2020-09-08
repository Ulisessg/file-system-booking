import React from 'react';
import ReactDom from 'react-dom';

//Componentes
import Header from '../../components/common/Header';
import FormularioBusqueda from '../../components/hotel/FormularioBusqueda';
import ResultadoBusqueda from '../../components/hotel/ResultadoBusqueda';

ReactDom.render(
  <>
    <Header />
    <FormularioBusqueda />

    <section className='container resultados'>
      <ResultadoBusqueda />
      <ResultadoBusqueda />
      <ResultadoBusqueda />
      <ResultadoBusqueda />
      <ResultadoBusqueda />
      <ResultadoBusqueda />
    </section>
  </>,
  document.getElementById('root'),
);
