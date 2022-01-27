import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/img/viatouch_logo.png';
import locations from '../img/locations.webp';
import { Row, Col } from 'react-bootstrap';
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import classes from '../styles/DummyViews.module.css';

const Locations = () => {
  return (
    <div className={classes.Container}>
      <Row>
        <Col md={3}>
          <ProSidebar>
            <div className={classes.LogoBackground}>
              <SidebarHeader className={classes.SidebarHeader}>
                <Link to='/'>
                  <img className={classes.LogoImage} src={logo} alt='' />
                </Link>
              </SidebarHeader>
            </div>
            <Link className={classes.Link} to='/machines'>
              <SidebarContent className={classes.SidebarContent}>
                <i className='fas fa-server'></i> Machines
              </SidebarContent>
            </Link>
            <Link className={classes.Link} to='/locations'>
              <SidebarContent className={classes.SidebarContent}>
                <i className='fas fa-map-marker-alt'></i> Locations
              </SidebarContent>
            </Link>
            <Link className={classes.Link} to='/products'>
              <SidebarContent className={classes.SidebarContent}>
                <i className='fas fa-cube'></i> Products
              </SidebarContent>
            </Link>
            <Link className={classes.Link} to='/'>
              <SidebarContent className={classes.SidebarContent}>
                <i className='fas fa-file-alt'></i> Reports
              </SidebarContent>
            </Link>
            <Link className={classes.Link} to='/media'>
              <SidebarContent className={classes.SidebarContent}>
                <i className='fab fa-youtube'></i> Media
              </SidebarContent>
            </Link>
            <Link className={classes.Link} to='/usermanagement'>
              <SidebarContent className={classes.SidebarContent}>
                <i className='fas fa-cog'></i> User Management
              </SidebarContent>
            </Link>
            <Link className={classes.Link} to='/logout'>
              <SidebarContent className={classes.SidebarContent}>
                <i className='fas fa-sign-out-alt'></i> Logout
              </SidebarContent>
            </Link>
            <SidebarContent>&nbsp;</SidebarContent>
            <SidebarContent>&nbsp;</SidebarContent>
            <SidebarContent>&nbsp;</SidebarContent>
            <SidebarFooter className={classes.SidebarFooter}>
              Version 1.6.32
            </SidebarFooter>
            <SidebarContent>&nbsp;</SidebarContent>
          </ProSidebar>
        </Col>

        <Col md={9}>
          <div>
            <div className={classes.View}>
              <header className={classes.ViewHeader}>
                <img src={locations} className={classes.ViewImage} alt='logo' />
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
