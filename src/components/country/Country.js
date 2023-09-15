import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import {
  getAllCountries,
  getRegion,
} from '../../redux/countriesSlice';
// import './Country.css';

const Country = () => {
  const { countriesData, isLoading, region } = useSelector(
    (store) => store.country,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!countriesData.length) dispatch(getAllCountries());
    if (region) dispatch(getRegion(region));
  }, [dispatch, countriesData.length, region]);

  return (
    <div className="country__list">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        countriesData.length > 0
        && countriesData.map((item) => (
          <Link
            to={`/${item.cioc}`}
            key={item.name.common}
            className="country__container"
          >
            <img src={item.flags.png} alt={item.flags.alt} />
            <div className="country__content">
              <BsArrowRightCircle className="country__arrow" />
              <h3>
                Name:
                {item.name.common}
              </h3>
              <p>
                Capital:
                {item.capital}
              </p>
              <p>
                Population:
                {item.population}
              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Country;
