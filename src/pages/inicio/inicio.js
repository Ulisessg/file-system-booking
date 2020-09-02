/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ReactDom from 'react-dom';

import Header from '../../components/common/Header';

const Carousel = () => {
  return (
    <>
      <main id='main'>
        <div
          id='carousel'
          className='carousel slide'
          data-ride='carousel'
          data-pause='false'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img
                className='d-block w-100'
                src='/img/empresario.jpg'
                alt='#'
              />
            </div>
            <div className='carousel-item'>
              <img
                className='d-block w-100'
                src='/img/habitacion.jpg'
                alt='#'
              />
            </div>
            <div className='carousel-item'>
              <img className='d-block w-100' src='/img/mostrador.jpg' alt='#' />
            </div>
            <div className='carousel-item'>
              <img className='d-block w-100' src='/img/registro.jpg' alt='#' />
            </div>
            <div className='overlay'>
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-md-6 offset-md-6 text-center text-md-right'>
                    <h1>Servicios</h1>
                    <p className='d-none d-md-block'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat, porro molestiae! Quaerat excepturi, placeat
                      incidunt consequatur cum eveniet labore quos tempore,
                      culpa eaque corrupti voluptatum assumenda dicta repellat
                      sit in!
                    </p>

                    <button
                      type='button'
                      className='btn btn-platzi'
                      data-toggle='modal'
                      data-target='#Buscar'
                    >
                      Buscar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const Cards = () => {
  return (
    <>
      <div className='mt-4 mb-4'>
        <div className='container'>
          <div className='row'>
            <div className='col text-center text-upercase'>
              <small>AQUI VA UN TEXTO</small>
              <h2>TEXTO</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 mb-4'>
              <div className='card'>
                <img
                  className='card-img-top'
                  src='/img/empresario.jpg'
                  alt='#'
                />
                <div className='card-body'>
                  <h5 className='card-title mb-0'>TEXTO</h5>
                  <p className='card-text'>
                    Some quick example text to build on the card title mb-0 and
                    make up the bulk of the cards content
                  </p>
                  <a href='#' className='btn btn-primary'>
                    TEXTO
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-4'>
              <div className='card'>
                <img
                  className='card-img-top'
                  src='/img/habitacion.jpg'
                  alt='#'
                />
                <div className='card-body'>
                  <h5 className='card-title mb-0'>TEXTO</h5>
                  <p className='card-text'>
                    Some quick example text to build on the card title mb-0 and
                    make up the bulk of the cards content
                  </p>
                  <a href='#' className='btn btn-primary'>
                    TEXTO
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-4'>
              <div className='card'>
                <img
                  className='card-img-top'
                  src='/img/mostrador.jpg'
                  alt='#'
                />
                <div className='card-body'>
                  <h5 className='card-title mb-0'>TEXTO</h5>
                  <p className='card-text'>
                    Some quick example text to build on the card title mb-0 and
                    make up the bulk of the cards content
                  </p>
                  <a href='#' className='btn btn-primary'>
                    TEXTO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Servicios = () => {
  return (
    <>
      <section id='place-time'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12 col-lg-4 pl-0 pr-0'>
              <img src='/img/registro.jpg' alt='#' />
            </div>
            <div className='col-12 col-lg-6 pt-4 pb-4'>
              <h2>Conozca mas de Nuestros Servicios...</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                voluptatem itaque, porro quaerat eveniet quod, minima non
                consectetur excepturi sapiente illum repellat. Quas nulla
                voluptatum eaque quis dolorum fugit similique?
              </p>
              <a className='btn btn-outline-light' href='#'>
                Conoce Mas..
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <footer id='footer' className='page-footer font-small blue pt-4'>
        <div className='container-fluid text-center text-md-left' />
        <div className='row'>
          <div className='col-md-6 mt-md-0 mt-3'>
            <h5 className='text-uppercase'>TEXTO PARA EL FOOTER</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              dolores optio sed laborum, quos blanditiis, consequatur nostrum
              vel.
            </p>
          </div>
          <hr className='clearfix w-100 d-md-none pb-3' />
          <div className='col-md-3 mb-md-0 mb-3'>
            <h5 className='text-uppercase'>Links</h5>
            <ul className='list-unstyled'>
              <li>
                <a href='#!'>Link 1</a>
              </li>
              <li>
                <a href='#!'>Link 2</a>
              </li>
              <li>
                <a href='#!'>Link 3</a>
              </li>
              <li>
                <a href='#!'>Link 4</a>
              </li>
            </ul>
          </div>
          <div className='col-md-3 mb-md-0 mb-3'>
            <h5 className='text-uppercase'>Links</h5>
            <ul className='list-unstyled'>
              <li>
                <a href='#!'>Link 1</a>
              </li>
              <li>
                <a href='#!'>Link 2</a>
              </li>
              <li>
                <a href='#!'>Link 3</a>
              </li>
              <li>
                <a href='#!'>Link 4</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-copyright text-center py-3'>
          © 2020 Copyright:
          <a href='#'> Platzi Booking</a>
        </div>
      </footer>
    </>
  );
};

ReactDom.render(
  <>
    <Header />
    ,
    <Carousel />
    ,
    <Cards />
    ,
    <Servicios />
    ,
    <Footer />
  </>,
  document.getElementById('root'),
);
