import React from 'react';
import Spinner from './Spinner';
import { Row, Col, Card, Form, Button, Table } from 'react-bootstrap';
import classes from '../styles/Dashboard.module.css';

const Report = (props) => {
  // var date = new Date('2010-10-11T00:00:00+05:30');
  // console.log(
  //   (date.getMonth() > 8 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)) +
  //     '/' +
  //     (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) +
  //     '/' +
  //     date.getFullYear()
  // );
  // console.log('DATE: ' + date);

  return (
    <div className={classes.Container}>
      {!props.isLoading ? <div className='text-center'></div> : <Spinner />}
      {/* {!props.isLoadingFinancial ? (
        <p>Financial Summary</p>
      ) : (
        <p>Transactions</p>
      )} */}
      {props.items.map((item, index) => {
        return (
          <Row key={index}>
            <Col md={12}>
              <div>
                <div className={classes.TableDiv}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Report: Transactions</Card.Title>
                      <Card.Subtitle className='mb-2 text-muted'>
                        {/* Date: 1/20/2020 */}
                        Date: {props.from_date} to {props.to_date}
                        {/* {props.from_date.map((from) => {
                          return <p>{from}</p>;
                        })} */}
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
