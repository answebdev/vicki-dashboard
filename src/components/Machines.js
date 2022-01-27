import React from 'react';
import Sidebar from './Sidebar';
import machines from '../img/machinestiny.webp';
import { Row, Col } from 'react-bootstrap';
import classes from '../styles/DummyViews.module.css';

const Machines = () => {
  return (
    <div className={classes.Container}>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>

        <Col md={9}>
          <div>
            <div className={classes.View}>
              <header className={classes.ViewHeader}>
                <img src={machines} className={classes.ViewImage} alt='logo' />
                <p className={classes.ViewText}>Machines</p>
              </header>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Machines;
