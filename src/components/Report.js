import React from 'react';
import Spinner from './Spinner';
import { Row, Col, Card, Table } from 'react-bootstrap';
import classes from '../styles/Dashboard.module.css';

const Report = (props) => {
  // Format Dates
  let rawFromDate = props.from_date,
    formattedFromDate = new Date(rawFromDate.split('-')).toLocaleDateString();
  let rawToDate = props.to_date,
    formattedToDate = new Date(rawToDate.split('-')).toLocaleDateString();

  if (!rawToDate) {
    formattedToDate = '(no date selected)';
  }

  if (!rawFromDate) {
    formattedFromDate = '(no date selected)';
  }

  return (
    <div className={classes.Container}>
      {!props.isLoading ? <div className='text-center'></div> : <Spinner />}

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
                        Date: {formattedFromDate} to {formattedToDate}
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
                            <td>
                              {!rawFromDate || !rawToDate
                                ? null
                                : item.report[0].transaction_count}
                            </td>
                            <td>
                              {!rawFromDate || !rawToDate
                                ? null
                                : item.report[0].items_sold}
                            </td>
                            <td>
                              {!rawFromDate || !rawToDate
                                ? null
                                : item.report[0].gross_revenues}
                            </td>
                            <td>
                              {!rawFromDate || !rawToDate
                                ? null
                                : item.report[0].taxes}
                            </td>
                            <td>
                              {!rawFromDate || !rawToDate
                                ? null
                                : item.report[0].revenues}
                            </td>
                            <td>
                              {!rawFromDate || !rawToDate
                                ? null
                                : (
                                    Math.round(item.report[0].cost * 100) / 100
                                  ).toFixed(2)}
                            </td>
                            <td>
                              {!rawFromDate || !rawToDate
                                ? null
                                : item.report[0].gross_margin}
                            </td>
                            <td>
                              {!rawFromDate || !rawToDate
                                ? null
                                : item.report[0].gross_margin_percent}
                            </td>
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
