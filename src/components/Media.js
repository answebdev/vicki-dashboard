import React from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from './Sidebar';
import media from '../img/mediatiny.webp';
import { Row, Col } from 'react-bootstrap';
import classes from '../styles/DummyViews.module.css';

const Media = () => {
  return (
    <div className={classes.Container}>
      <Helmet>
        <title>VICKI Dashboard | Media</title>
      </Helmet>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>

        <Col md={9}>
          <div>
            <div className={classes.View}>
              <header className={classes.ViewHeader}>
                <img src={media} className={classes.ViewImage} alt='Media' />
                <p className={classes.ViewText}>Media</p>
              </header>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Media;
