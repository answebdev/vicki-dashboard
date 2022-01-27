import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../../src/img/viatouch_logo.png';
import Report from './Report';
import FinancialSummary from './FinancialSummary';
import { Row, Col, Card, Form } from 'react-bootstrap';
import classes from '../styles/Dashboard.module.css';
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

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
  const [top_level_grouping, setTop_level_grouping] = useState('client_id');
  const [sort, setSort] = useState('items_sold,d');

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

  const clearReport = () => {
    setIsShowing(false);
    setIsLoadingFinancial(false);
    setCurrentReport('');
    setCriteria('');
    setType('');
    setCardholder('');
    setCardDigits('');
    setFrom_date('');
    setTo_date('');
  };

  // useEffect(() => {
  //   clearReport();
  // }, []);

  let futureDates = new Date().toISOString().slice(0, 10);

  return (
    <div className={classes.Container}>
      <Row>
        <Col md={3}>
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
                        {/* <Form.Control
                          className={classes.FormControlLeft}
                          type='text'
                          placeholder='Transactions'
                        /> */}
                        <select
                          onChange={(event) => changeReport(event.target.value)}
                          value={currentReport}
                          className={`${classes.FormControlLeft} ${classes.Dropdown}`}
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
                          <input
                            className={`${classes.FormControlLeft} ${classes.Datepicker}`}
                            type='date'
                            onChange={(e) => setFrom_date(e.target.value)}
                          ></input>

                          <input
                            className={`${classes.FormControlLeft} ${classes.Datepicker}`}
                            type='date'
                            onChange={(e) => setTo_date(e.target.value)}
                            max={futureDates}
                          ></input>
                        </div>
                      </Form.Group>
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput1'
                      >
                        <Form.Label>Name Of Cardholder</Form.Label>
                        {/* <Form.Control
                          className={classes.FormControlLeft}
                          type='text'
                        /> */}
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
                      <button
                        onClick={() => fetchResults()}
                        className={classes.CreateBtn}
                        variant='warning'
                      >
                        CREATE REPORT
                      </button>
                    </div>

                    <div>
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput1'
                      >
                        <Form.Label>Criteria</Form.Label>
                        {/* <Form.Control
                          className={classes.FormControlLeft}
                          type='text'
                        /> */}
                        <select
                          className={`${classes.FormControlRight} ${classes.Dropdown}`}
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
                        {/* <Form.Control
                          className={classes.FormControlLeft}
                          type='text'
                        /> */}
                        <select
                          style={{ padding: '6px 12px' }}
                          className={`${classes.FormControlRight} ${classes.Dropdown}`}
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
                        {/* <Form.Control
                          className={classes.FormControlLeft}
                          type='text'
                        /> */}
                        <input
                          className={`${classes.FormControlRight} ${classes.Input}`}
                          onChange={(event) =>
                            changeCardDigits(event.target.value)
                          }
                          value={cardDigits}
                          type='text'
                          name='lastfourdigits'
                        ></input>
                      </Form.Group>
                    </div>
                  </div>
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
