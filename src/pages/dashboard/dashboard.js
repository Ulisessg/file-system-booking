import React from 'react';
import ReactDom from 'react-dom';

import '../../styles/default-styles.css';

import Header from '../../components/common/Header';
import Main from '../../components/dashboard/Main';

ReactDom.render(
  <>
    <Header />
    <Main />
  </>,
  document.getElementById('root'),
);
