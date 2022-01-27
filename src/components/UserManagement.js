import React from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from './Sidebar';
import usermanagement from '../img/usermanagementtiny.webp';
import { Row, Col } from 'react-bootstrap';
import classes from '../styles/DummyViews.module.css';

const UserManagement = () => {
  return (
    <div className={classes.Container}>
      <Helmet>
        <title>VICKI Dashboard | User Management</title>
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
                  src={usermanagement}
                  className={classes.ViewImage}
                  alt='logo'
                />
                <p className={classes.ViewText}>User Management</p>
              </header>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserManagement;
