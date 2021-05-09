import React from 'react';
import CarsList from '../containers/Cars_list'
import Details from '../containers/Details';

const WebPage = () => (
  <div>
    <h3>Cars:</h3>
    <CarsList />
      <hr />
    <h3>Details:</h3>
    <Details />
  </div>
);

export default WebPage;