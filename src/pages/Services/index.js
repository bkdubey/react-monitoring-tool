import React from 'react';
import { Route } from 'react-router-dom';
import ServiceMonitor from './ServiceMonitor';
//import ExtendedTables from './ExtendedTables';
//import ReactBootstrapTable from './ReactBootstrapTable';


const status = ({match}) => (
  <div className="content">
    <Route path={`${match.url}/ServiceMonitor`} component={ServiceMonitor} />

  </div>
);

export default status;