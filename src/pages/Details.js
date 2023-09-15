import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry } from '../redux/countriesSlice';
import Navbar from '../components/Navbar/Navbar';
// import './Details.css';

const Details = () => {
  const { countrySearch } = useSelector((store) => store.country);
  const dispatch = useDispatch();
  const { code } = useParams();

  useEffect(() => {
    if (code) {
      dispatch(getCountry(code.toLowerCase()));
    }
  }, [dispatch, code]);
  return (
    <div>
      <Navbar title="Details" back />
      {countrySearch.length > 0 ? (
        <div className="detail__container">
          <div className="detail__header">
            <img
              src={countrySearch[0].flags.png}
              alt={countrySearch[0].flags.alt}
            />
            <div>
              <h2>{countrySearch[0].name.official}</h2>
              <p>{countrySearch[0].region}</p>
            </div>
          </div>
          <div className="detail__description">
            <p>
              <span>Common name</span>
              {countrySearch[0].name.common}
            </p>
            <p>
              <span>Capital</span>
              {countrySearch[0].capital}
            </p>
            <p>
              <span>Sub Region</span>
              {countrySearch[0].subregion}
            </p>
            <p>
              <span>Population</span>
              {countrySearch[0].population}
            </p>
            <p>
              <span>Languages</span>
              {Object.values(countrySearch[0].languages)
                .map((item) => item)
                .join(',')}
            </p>
            <p>
              <span>Currencies</span>
              {Object.values(countrySearch[0].currencies)
                .map((item) => item.name)
                .join(',')}
            </p>
            <p>
              <span>Time Zone</span>
              {countrySearch[0].timezones[0]}
            </p>
            <p>
              <span>Area</span>
              {countrySearch[0].area}
            </p>
            <p>
              <span>Map</span>
              <a
                href={countrySearch[0].maps.googleMaps}
                style={{ color: '#1d505b' }}
              >
                Google Map
              </a>
            </p>
            <p>
              <span>Latitude & Longitude</span>
              {countrySearch[0].latlng.join(' / ')}
            </p>
          </div>
        </div>
      ) : (
        <h1>There No Detail About This Country</h1>
      )}
    </div>
  );
};

export default Details;
