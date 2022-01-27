import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import classes from '../styles/Dashboard.module.css';

const FinancialSummary = (props) => {
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
