import React from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from './Sidebar';
import products from '../img/productstiny.webp';
import { Row, Col } from 'react-bootstrap';
import classes from '../styles/DummyViews.module.css';

const Products = () => {
  return (
    <div className={classes.Container}>
      <Helmet>
        <title>VICKI Dashboard | Products</title>
      </Helmet>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>

        <Col md={9}>
          <div>
            <div className={classes.View}>
              <header className={classes.ViewHeader}>
                <img src={products} className={classes.ViewImage} alt='logo' />
                <p className={classes.ViewText}>Products</p>
              </header>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Products;
