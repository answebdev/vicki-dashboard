import React from 'react';
import Spinner from './components/misc/Spinner';

const Results = (props) => {
  return (
    <div>
      {props.items.map((item) => {
        return (
          <div key={item.correlation_id}>
            <p>Top Level Group Name: {item.report[0].top_level_group_name}</p>
            <p>Gross Revenues: ${item.report[0].gross_revenues}</p>
            <p>Total Pages: {item.page.total_pages}</p>
          </div>
        );
      })}

      {!props.isLoading ? <div className='text-center'></div> : <Spinner />}
    </div>
  );
};

export default Results;
