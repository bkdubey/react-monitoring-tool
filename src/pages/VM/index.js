import React from 'react';
import { Route } from 'react-router-dom';
import VMMonitor from './VMMonitor';
//import ExtendedTables from './ExtendedTables';
//import ReactBootstrapTable from './ReactBootstrapTable';


const VM = ({match}) => (
  <div className="content">
    <Route path={`${match.url}/VMMonitor`} component={VMMonitor} />

  </div>
);

export default VM;