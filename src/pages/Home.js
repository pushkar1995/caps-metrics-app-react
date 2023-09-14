import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Country from '../components/country/Country';
import Filter from '../components/filter/Filter';

const Homepage = () => (
  <>
    <Navbar title="Countries" back={false} />
    <Filter />
    <Country />
  </>
);

export default Homepage;
