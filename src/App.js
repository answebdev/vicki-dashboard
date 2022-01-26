import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateReport from './components/CreateReport';
import Machines from './components/Machines';
import Locations from './components/Locations';
import Products from './components/Products';
import Media from './components/Media';
import UserManagement from './components/UserManagement';
import Logout from './components/Logout';

import './App.css';

function App() {
  // const [items, setItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // var myHeaders = new Headers();
  // myHeaders.append('Authorization', 'Bearer YCXW1zkNJvg4T6aKK9W6sQx2bNrQ');
  // myHeaders.append('Content-Type', 'application/json');

  // var raw = JSON.stringify({
  //   from_date: '2021-12-01',
  //   to_date: '2021-12-31',
  //   top_level_grouping: 'client_id',
  //   sort: 'items_sold,d',
  // });

  // var requestOptions = {
  //   method: 'POST',
  //   headers: myHeaders,
  //   body: raw,
  //   redirect: 'follow',
  // };

  // const fetchResults = async () => {
  //   setIsLoading(true);
  //   const url = 'https://viatouchmedia-test.apigee.net/loyalty/reports/sales';
  //   const response = await fetch(url, requestOptions);
  //   const data = await response.json();

  //   fetch(url, requestOptions)
  //     .then((response) => {
  //       setIsLoading(false);
  //       setItems([data]);
  //       return response.json();
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetchResults();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const renderData =
  //   // items.length > 0 &&
  //   // Object.keys(items).map((item, index) => {
  //   // items.map((item, index) => {

  //   // Array.isArray(items) &&
  //   items.map((item) => {
  //     return (
  //       <div key={item.correlation_id}>
  //         <p>Top Level Group Name: {item.report[0].top_level_group_name}</p>

  //         <p>Total Pages: {item.page.total_pages}</p>
  //       </div>
  //     );
  //   });

  // const content = isLoading ? <div>Loading...</div> : <div>{renderData}</div>;

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={CreateReport} />
          <Route exact path='/machines' component={Machines} />
          <Route exact path='/locations' component={Locations} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/media' component={Media} />
          <Route exact path='/usermanagement' component={UserManagement} />
          <Route exact path='/logout' component={Logout} />
        </Switch>
        {/* <CreateReport /> */}
        {/* <Report items={items} isLoading={isLoading} /> */}
      </div>
    </Router>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <img src={logo} className='App-logo' alt='logo' />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className='App-link'
//           href='https://reactjs.org'
//           target='_blank'
//           rel='noopener noreferrer'
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
