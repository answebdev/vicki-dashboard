import React from 'react';
import Spinner from './Spinner';
import { Row, Col, Card } from 'react-bootstrap';
import classes from '../styles/Dashboard.module.css';

const FinancialSummary = (props) => {
  return (
    <div className={classes.Container}>
      {/* {!props.isLoading ? <div className='text-center'></div> : <Spinner />} */}
      {/* {!props.isLoadingFinancial ? (
        <p>Financial Summary</p>
      ) : (
        <p>Transactions</p>
      )} */}
      {/* {props.items.map((item, index) => { */}
      <Row>
        <Col md={12}>
          <div>
            <div className={classes.TableDiv}>
              <Card className={classes.FinancialSummary}>
                <Card.Body>
                  <Card.Title>Report: Financial Summary</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    Date: {props.from_date} to {props.to_date}
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
