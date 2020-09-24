import React, { useState } from 'react';

import Header from '../../components/common/Header';
import FormularioBusqueda from '../../components/hotel/FormularioBusqueda';
import ResultadoBusqueda from '../../components/hotel/ResultadoBusqueda';

const bogota = [
  {
    room_id: 4,
    room_number: 101,
    price: 80000.0,
    address: 'Kr 75 # 3-400',
    hotel_id: 33,
    hotel_name: 'Hotel de Bogota 1',
    picture_url: 'test_picture_url.com',
  },
  {
    room_id: 5,
    room_number: 102,
    price: 70000.0,
    address: 'Kr 75 # 3-400',
    hotel_id: 33,
    hotel_name: 'Hotel de Bogota 1',
    picture_url: 'test_picture_url.com',
  },
  {
    room_id: 6,
    room_number: 1001,
    price: 100000.0,
    address: 'Calle 124 #5-26',
    hotel_id: 34,
    hotel_name: 'Hotel de Bogota 2',
  },
  {
    room_id: 7,
    room_number: 1002,
    price: 120000.0,
    address: 'Calle 124 #5-26',
    hotel_id: 34,
    hotel_name: 'Hotel de Bogota 2',
  },
];

const medellin = [
  {
    room_id: 8,
    room_number: 111,
    price: 90000.0,
    address: 'Transversal 17 #10-70',
    hotel_id: 35,
    hotel_name: 'Hotel de Medellin 1',
  },
  {
    room_id: 9,
    room_number: 112,
    price: 80000.0,
    address: 'Transversal 17 #10-70',
    hotel_id: 35,
    hotel_name: 'Hotel de Medellin 1',
  },
  {
    room_id: 10,
    room_number: 101,
    price: 70000.0,
    address: 'Carrera 3 #5-76',
    hotel_id: 36,
    hotel_name: 'Hotel de Medellin 2',
  },
  {
    room_id: 11,
    room_number: 102,
    price: 60000.0,
    address: 'Carrera 3 #5-76',
    hotel_id: 36,
    hotel_name: 'Hotel de Medellin 2',
  },
];

const App = () => {
  const [city, setCity] = useState('');

  const [data, setData] = useState([]);

  const handleChange = (data) => {
    setCity(data);
    if (city == 'bogota') {
      setData(bogota);
    } else {
      setData(medellin);
    }
  };
  return (
    <>
      <Header />
      <FormularioBusqueda onChange={handleChange} />
      <section className='container resultados'>
        <ResultadoBusqueda city={city} data={data} />
      </section>
    </>
  );
};

export default App;
