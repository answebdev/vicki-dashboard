import React from 'react';
import spinner from '../img/spinner.gif';
import classes from '../styles/Spinner.module.css';

const Spinner = () => (
  <img className={classes.Spinner} src={spinner} alt='Loading...' />
);

export default Spinner;
