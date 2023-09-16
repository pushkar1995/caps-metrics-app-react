import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Country from '../../components/country/Country';
import Filter from '../../components/filter/Filter';

const Homepage = () => (
  <div className="app-container">
    <Navbar title="Countries" back={false} />
    <Filter />
    <Country />
  </div>
);

export default Homepage;
