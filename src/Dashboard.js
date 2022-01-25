import React from 'react';
import logo from '../src/img/viatouch_logo.png';
import Spinner from './components/misc/Spinner';
import { Row, Col, Card, Form, Button, Table } from 'react-bootstrap';
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
    <div className={classes.Container}>
      {props.items.map((item, index) => {
        return (
          <Row key={index}>
            <Col md={3}>
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
            </Col>

            <Col md={9}>
              <div style={{ padding: '2em' }}>
                <div className={classes.CardDiv}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Generate Report</Card.Title>
                      <br />
                      {/* <Card.Subtitle className='mb-2 text-muted'>
                        Card Subtitle
                      </Card.Subtitle> */}
                      <div className={classes.InputContainer}>
                        <div>
                          <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlInput1'
                          >
                            <Form.Label>Report Type</Form.Label>
                            <Form.Control
                              className={classes.FormControlLeft}
                              type='text'
                              placeholder='Transactions'
                            />
                          </Form.Group>
                          <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlInput1'
                          >
                            <Form.Label>Time Range</Form.Label>
                            <Form.Control
                              className={classes.FormControlLeft}
                              type='text'
                            />
                          </Form.Group>
                          <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlInput1'
                          >
                            <Form.Label>Name Of Cardholder</Form.Label>
                            <Form.Control
                              className={classes.FormControlLeft}
                              type='text'
                            />
                          </Form.Group>
                          <Button
                            className={classes.CreateBtn}
                            variant='warning'
                          >
                            CREATE REPORT
                          </Button>
                        </div>

                        <div>
                          <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlInput1'
                          >
                            <Form.Label>Criteria</Form.Label>
                            <Form.Control
                              className={classes.FormControlLeft}
                              type='text'
                            />
                          </Form.Group>
                          <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlInput1'
                          >
                            <Form.Label>Selected Type</Form.Label>
                            <Form.Control
                              className={classes.FormControlLeft}
                              type='text'
                            />
                          </Form.Group>
                          <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlInput1'
                          >
                            <Form.Label>Last Four Digits Of Card</Form.Label>
                            <Form.Control
                              className={classes.FormControlLeft}
                              type='text'
                            />
                          </Form.Group>
                        </div>
                      </div>
                      {/* <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Card.Link href='#'>Card Link</Card.Link>
                      <Card.Link href='#'>Another Link</Card.Link> */}
                    </Card.Body>
                  </Card>
                </div>

                <div className={classes.TableDiv}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Report: Transactions</Card.Title>
                      <Card.Subtitle className='mb-2 text-muted'>
                        Date: 1/20/2020
                      </Card.Subtitle>
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
      {!props.isLoading ? <div className='text-center'></div> : <Spinner />}
    </div>
  );
};

export default Dashboard;
