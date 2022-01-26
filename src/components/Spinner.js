import React from 'react';
import spinner from '../img/spinner.gif';
import classes from '../styles/Spinner.module.css';

const Spinner = () => (
  <img src={spinner} alt='Loading...' className={classes.Spinner} />
);

export default Spinner;
