import React from 'react';

const style = { border: 0 };

const Iframe = () => {
  return (
    <>
      <section className='iframe section'>
        <h2>Ubicación</h2>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7530.094982393862!2d-99.1391562!3d19.3237454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce01d1f0ebb033%3A0x71f68a496de4055a!2sYardis%20Xotepingo!5e0!3m2!1ses-419!2smx!4v1599608480805!5m2!1ses-419!2smx'
          width='600'
          height='450'
          frameBorder='0'
          style={style}
          allowFullScreen=''
          aria-hidden='false'
          title='map'
        />
      </section>
    </>
  );
};

export default Iframe;
