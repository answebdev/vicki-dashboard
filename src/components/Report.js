import React from 'react';
import Spinner from './Spinner';
import { Row, Col, Card, Form, Button, Table } from 'react-bootstrap';
import classes from '../styles/Dashboard.module.css';

const Report = (props) => {
  return (
    <div className={classes.Container}>
      {!props.isLoading ? <div className='text-center'></div> : <Spinner />}
      {props.items.map((item, index) => {
        return (
          <Row key={index}>
            {/* <Col md={3}>
              <ProSidebar>
                <SidebarHeader className={classes.SidebarHeader}>
                  <img className={classes.LogoImage} src={logo} alt='' />
                </SidebarHeader>
                <SidebarContent className={classes.SidebarContent}>
                  <i className='fas fa-server'></i> Machines
                </SidebarContent>
                <SidebarContent className={classes.SidebarContent}>
                  <i className='fas fa-map-marker-alt'></i> Locations
                </SidebarContent>
                <SidebarContent className={classes.SidebarContent}>
                  <i className='fas fa-cube'></i> Products
                </SidebarContent>
                <SidebarContent className={classes.SidebarContent}>
                  <i className='fas fa-file-alt'></i> Reports
                </SidebarContent>
                <SidebarContent className={classes.SidebarContent}>
                  <i className='fab fa-youtube'></i> Media
                </SidebarContent>
                <SidebarContent className={classes.SidebarContent}>
                  <i className='fas fa-cog'></i> User Management
                </SidebarContent>
                <SidebarContent className={classes.SidebarContent}>
                  <i className='fas fa-sign-out-alt'></i> Logout
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
            </Col> */}

            <Col md={12}>
              <div>
                <div className={classes.TableDiv}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Report: Transactions</Card.Title>
                      <Card.Subtitle className='mb-2 text-muted'>
                        Date: 1/20/2020
                      </Card.Subtitle>
                      <br />
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Transactions</th>
                            <th>Items Sold</th>
                            <th>Gross Revenue</th>
                            <th>Taxes</th>
                            <th>Revenue</th>
                            <th>Cost</th>
                            <th>Gross Margin</th>
                            <th>Gross Margin %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{item.report[0].transaction_count}</td>
                            <td>{item.report[0].items_sold}</td>
                            <td>{item.report[0].gross_revenues}</td>
                            <td>{item.report[0].taxes}</td>
                            <td>{item.report[0].revenues}</td>
                            <td>
                              {(
                                Math.round(item.report[0].cost * 100) / 100
                              ).toFixed(2)}
                            </td>
                            <td>{item.report[0].gross_margin}</td>
                            <td>{item.report[0].gross_margin_percent}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default Report;
