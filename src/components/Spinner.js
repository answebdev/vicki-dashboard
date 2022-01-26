import React from 'react';
import spinner from '../img/spinner.gif';

const Spinner = () => (
  <img
    src={spinner}
    alt='Loading...'
    style={{ width: '35px', height: 'auto', margin: 'auto', display: 'block' }}
  />
);

export default Spinner;

// import React from 'react';
// import spinner from '../img/spinner.gif';
// import classes from '../styles/Spinner.module.css';

// const Spinner = () => (
//   <img className={classes.SpinnerGif} src={spinner} alt='Loading...' />
// );

// export default Spinner;
