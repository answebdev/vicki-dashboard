import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from './Sidebar';
import Report from './Report';
import FinancialSummary from './FinancialSummary';
import Swal from 'sweetalert2';
import { Row, Col, Card, Form } from 'react-bootstrap';
import classes from '../styles/Dashboard.module.css';

const CreateReport = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingFinancial, setIsLoadingFinancial] = useState(false);
  const [isShowing, setIsShowing] = useState(true);
  const [currentReport, setCurrentReport] = useState('');
  const [criteria, setCriteria] = useState('');
  const [type, setType] = useState('');
  const [cardholder, setCardholder] = useState('');
  const [cardDigits, setCardDigits] = useState('');

  const [from_date, setFrom_date] = useState('');
  const [to_date, setTo_date] = useState('');
  const [top_level_grouping] = useState('client_id');
  const [sort] = useState('items_sold,d');

  const raw = { from_date, to_date, top_level_grouping, sort };

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer YCXW1zkNJvg4T6aKK9W6sQx2bNrQ');
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(raw),
    redirect: 'follow',
  };

  const fetchResults = async () => {
    setIsLoading(true);
    const url = 'https://viatouchmedia-test.apigee.net/loyalty/reports/sales';
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    fetch(url, requestOptions)
      .then((response) => {
        setIsLoading(true);
        setIsShowing(true);
        setItems([data]);

        if (!currentReport) {
          Toast.fire({
            icon: 'warning',
            title: 'Please select a report type',
          });
          setIsShowing(false);
        }

        return response.json();
      })
      .catch((error) => {
        setIsLoading(false);
        setIsShowing(false);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const changeReport = (reportType) => {
    setCurrentReport(reportType);

    if (reportType === 'Financial Summary') {
      setIsLoadingFinancial(true);
      setIsShowing(false);
    } else {
      setIsLoadingFinancial(false);
    }
  };

  const changeCriteria = (criteriaType) => {
    setCriteria(criteriaType);
  };

  const changeOption = (optionType) => {
    setType(optionType);
  };

  const changeCardholder = (cardholder) => {
    setCardholder(cardholder);
  };

  const changeCardDigits = (cardDigits) => {
    setCardDigits(cardDigits);
  };

  return (
    <div className={classes.Container}>
      <Helmet>
        <title>VICKI Dashboard | Reports</title>
      </Helmet>
      <Row>
        <Col md={3}>
          <Sidebar
            setIsShowing={setIsShowing}
            setIsLoadingFinancial={setIsLoadingFinancial}
            setCurrentReport={setCurrentReport}
            setCriteria={setCriteria}
            setType={setType}
            setCardholder={setCardholder}
            setCardDigits={setCardDigits}
            setFrom_date={setFrom_date}
            setTo_date={setTo_date}
          />
        </Col>

        <Col md={9}>
          <div style={{ padding: '2em' }}>
            <div className={classes.CardDiv}>
              <Card>
                <Card.Body>
                  <Card.Title>Generate Report</Card.Title>
                  <br />
                  <div className={classes.InputContainer}>
                    <div>
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput1'
                      >
                        <Form.Label>Report Type</Form.Label>
                        <select
                          onChange={(event) => changeReport(event.target.value)}
                          value={currentReport}
                          className={`${classes.FormControlLeft} ${classes.Input}`}
                          name='reports'
                          id='reports'
                        >
                          <option value=''></option>
                          <option value='Transactions'>Transactions</option>
                          <option value='Financial Summary'>
                            Financial Summary
                          </option>
                        </select>
                      </Form.Group>
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput1'
                      >
                        <Form.Label>Time Range (From / To)</Form.Label>
                        <div className={classes.DatepickerContainer}>
                          <div className={classes.FromDatepicker}>
                            <input
                              className={`${classes.FormControlLeft} ${classes.Datepicker}`}
                              type='date'
                              onChange={(e) => setFrom_date(e.target.value)}
                              value={from_date}
                              title='From'
                            ></input>
                          </div>
                          <div className={classes.ToDatepicker}>
                            <input
                              className={`${classes.FormControlLeft} ${classes.Datepicker}`}
                              type='date'
                              onChange={(e) => setTo_date(e.target.value)}
                              value={to_date}
                              title='To'
                            ></input>
                          </div>
                        </div>
                      </Form.Group>
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput1'
                      >
                        <Form.Label>Name Of Cardholder</Form.Label>
                        <input
                          className={`${classes.FormControlLeft} ${classes.Input}`}
                          onChange={(event) =>
                            changeCardholder(event.target.value)
                          }
                          value={cardholder}
                          type='text'
                          name='cardholder'
                        ></input>
                      </Form.Group>
                    </div>

                    <div>
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput1'
                      >
                        <Form.Label>Criteria</Form.Label>
                        <select
                          className={`${classes.FormControlRight} ${classes.Input}`}
                          onChange={(event) =>
                            changeCriteria(event.target.value)
                          }
                          value={criteria}
                          name='criteria'
                          id='criteria'
                        >
                          <option value=''></option>
                          <option value='Criteria 1'>Criteria 1</option>
                          <option value='Criteria 2'>Criteria 2</option>
                          <option value='Criteria 3'>Criteria 3</option>
                        </select>
                      </Form.Group>
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput1'
                      >
                        <Form.Label>Selected Type</Form.Label>
                        <select
                          style={{ padding: '6px 12px' }}
                          className={`${classes.FormControlRight} ${classes.Input}`}
                          onChange={(event) => changeOption(event.target.value)}
                          value={type}
                          name='options'
                          id='options'
                        >
                          <option value=''></option>
                          <option value='Option 1'>Option 1</option>
                          <option value='Option 2'>Option 2</option>
                          <option value='Option 3'>Option 3</option>
                        </select>
                      </Form.Group>
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput1'
                      >
                        <Form.Label>Last Four Digits Of Card</Form.Label>
                        <input
                          className={`${classes.FormControlRight} ${classes.Input}`}
                          onChange={(event) =>
                            changeCardDigits(event.target.value)
                          }
                          value={cardDigits}
                          type='text'
                          name='lastfourdigits'
                          maxlength='4'
                        ></input>
                      </Form.Group>
                    </div>
                  </div>

                  <button
                    onClick={() => fetchResults()}
                    className={classes.CreateBtn}
                  >
                    CREATE REPORT
                  </button>
                </Card.Body>
              </Card>
            </div>
            {isShowing && !isLoadingFinancial ? (
              <Report
                from_date={from_date}
                to_date={to_date}
                items={items}
                isLoading={isLoading}
              />
            ) : null}

            {isLoadingFinancial ? (
              <FinancialSummary from_date={from_date} to_date={to_date} />
            ) : null}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CreateReport;
