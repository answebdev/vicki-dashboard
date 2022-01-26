import React from 'react';
import thespinner from '../img/spinner.gif';
import classes from '../styles/Spinner.module.css';

const Spinner = () => (
  <img className={classes.SpinnerGif} src={thespinner} alt='Loading...' />
);

export default Spinner;
