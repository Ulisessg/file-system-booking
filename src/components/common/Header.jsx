/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

//Estilos
import '../../styles/header-styles.css';

const Header = () => {
  return (
    <>
      <header>
        <nav
          id='header'
          className='navbar navbar-expand-lg navbar-dark bg-light  sticky-top'
        >
          <div className='container'>
            <a className='navbar-brand' href='#' />
            <img
              src='#'
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt='Logo'
              loading='lazy alt='
            />

            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbar'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon' />
            </button>

            <div className='collapse navbar-collapse' id='navbar'>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item '>
                  <a className='nav-link text-dark' href='/'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-dark' href='#'>
                    Productos
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-dark' href='#'>
                    Servicios
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-dark' href='#'>
                    Contactanos
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a className='btn btn-outline-dark mr-sm-2' href='login.html'>
              Iniciar sesion
            </a>
            <a className='btn btn-outline-dark mr-sm-2' href='/registro.html'>
              Registro
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
