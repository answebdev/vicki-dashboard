import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/img/viatouch_logo.png';
import classes from '../styles/Sidebar.module.css';
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const Sidebar = (props) => {
  const clearReport = () => {
    props.setIsShowing(false);
    props.setIsLoadingFinancial(false);
    props.setCurrentReport('');
    props.setCriteria('');
    props.setType('');
    props.setCardholder('');
    props.setCardDigits('');
    props.setFrom_date('');
    props.setTo_date('');
  };

  return (
    <div className={classes.Container}>
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
          <SidebarContent
            onClick={() => clearReport()}
            className={classes.SidebarContent}
          >
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
    </div>
  );
};

export default Sidebar;
