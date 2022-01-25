import React from 'react';
import logo from '../src/img/viatouch_logo.png';
import Spinner from './components/misc/Spinner';
import classes from './styles/Dashboard.module.css';

import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';

import 'react-pro-sidebar/dist/css/styles.css';

const Dashboard = (props) => {
  return (
    <div>
      {/* {props.items.map((item) => {
        return (
          <div key={item.correlation_id}>
            <p>Top Level Group Name: {item.report[0].top_level_group_name}</p>
            <p>Gross Revenues: ${item.report[0].gross_revenues}</p>
            <p>Total Pages: {item.page.total_pages}</p>
          </div>
        );
      })}

      {!props.isLoading ? <div className='text-center'></div> : <Spinner />} */}

      <ProSidebar>
        <SidebarHeader className={classes.SidebarHeader}>
          <img className={classes.LogoImage} src={logo} alt='' />
        </SidebarHeader>
        <SidebarContent className={classes.SidebarContent}>
          <i class='fas fa-server'></i> Machines
        </SidebarContent>
        <SidebarContent className={classes.SidebarContent}>
          <i class='fas fa-map-marker-alt'></i> Locations
        </SidebarContent>
        <SidebarContent className={classes.SidebarContent}>
          <i class='fas fa-cube'></i> Products
        </SidebarContent>
        <SidebarContent className={classes.SidebarContent}>
          <i class='fas fa-file-alt'></i> Reports
        </SidebarContent>
        <SidebarContent className={classes.SidebarContent}>
          <i class='fab fa-youtube'></i> Media
        </SidebarContent>
        <SidebarContent className={classes.SidebarContent}>
          <i class='fas fa-cog'></i> User Management
        </SidebarContent>
        <SidebarContent className={classes.SidebarContent}>
          <i class='fas fa-sign-out-alt'></i> Logout
        </SidebarContent>

        <SidebarContent>&nbsp;</SidebarContent>
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

export default Dashboard;
