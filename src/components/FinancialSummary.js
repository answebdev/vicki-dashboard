import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import classes from '../styles/Dashboard.module.css';

const FinancialSummary = (props) => {
  //   var date = new Date('2010-10-11T00:00:00+05:30');
  //   console.log(
  //     (date.getMonth() > 8 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)) +
  //       '/' +
  //       (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) +
  //       '/' +
  //       date.getFullYear()
  //   );
  //   console.log('DATE: ' + date);

  //   var date = new Date('Mon Aug 14 2017 00:00:00 GMT-0500 (CDT)');
  //   var newdate =
  //     date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();

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
      <Row>
        <Col md={12}>
          <div>
            <div className={classes.TableDiv}>
              <Card className={classes.FinancialSummary}>
                <Card.Body>
                  <Card.Title>Report: Financial Summary</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    Date: {formattedFromDate} to {formattedToDate}
                    {/* Date: {props.from_date} to {props.to_date} */}
                  </Card.Subtitle>
                  <br />
                </Card.Body>
              </Card>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FinancialSummary;
