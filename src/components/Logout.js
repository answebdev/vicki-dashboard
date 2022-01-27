import React from 'react';
import Sidebar from './Sidebar';
import logout from '../img/logouttiny.webp';
import { Row, Col } from 'react-bootstrap';
import classes from '../styles/DummyViews.module.css';

const Logout = () => {
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
                <img src={logout} className={classes.ViewImage} alt='logo' />
                <p className={classes.ViewText}>Logout</p>
              </header>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Logout;
