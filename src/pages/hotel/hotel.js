import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom';

//Componentes
import Spinner from '../../components/common/Spinner';

const FormularioBusqueda = lazy(() => import('../../components/hotel/FormularioBusqueda'));
const ResultadoBusqueda = lazy(() => import('../../components/hotel/ResultadoBusqueda'));
const Header = lazy(() => import('../../components/common/Header'));

// import Header from '../../components/common/Header';
// import FormularioBusqueda from '../../components/hotel/FormularioBusqueda';
// import ResultadoBusqueda from '../../components/hotel/ResultadoBusqueda';

ReactDom.render(
  <>
    <Suspense fallback={Spinner}>
      <Header />
      <FormularioBusqueda />
      <section className='container resultados'>
        <ResultadoBusqueda />
      </section>
    </Suspense>
  </>,
  document.getElementById('root'),
);
