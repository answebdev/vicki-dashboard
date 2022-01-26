import React from 'react';
import Thespinner from '../img/spinner.gif';
import classes from '../styles/Spinner.module.css';

const Spinner = () => (
  <img className={classes.SpinnerGif} src={Thespinner} alt='Loading...' />
);

export default Spinner;
