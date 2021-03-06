import React from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from './Sidebar';
import locations from '../img/locationstiny.webp';
import { Row, Col } from 'react-bootstrap';
import classes from '../styles/DummyViews.module.css';

const Locations = () => {
  return (
    <div className={classes.Container}>
      <Helmet>
        <title>VICKI Dashboard | Locations</title>
      </Helmet>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>

        <Col md={9}>
          <div>
            <div className={classes.View}>
              <header className={classes.ViewHeader}>
                <img
                  src={locations}
                  className={classes.ViewImage}
                  alt='Locations'
                />
                <p className={classes.ViewText}>Locations</p>
              </header>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Locations;
