import React from 'react';
import { Route } from 'react-router-dom';
import EnvironmentDetail from './EnvironmentDetail';
import ExtendedTables from './ExtendedTables';
import ReactBootstrapTable from './ReactBootstrapTable';

const Tables = ({match}) => (
  <div className="content">
    <Route path={`${match.url}/EnvironmentDetail`} component={EnvironmentDetail} />
    <Route path={`${match.url}/extended-tables`} component={ExtendedTables} />
    <Route path={`${match.url}/react-bootstrap-table`} component={ReactBootstrapTable} />
  </div>
);

export default EnvironmentDetail;