import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const WeatherList = ({ item, index }) => (
  <Link to={`/Africa/${item.capital}`}>
    <div
      key={item.name.common}
      className={`top-0 left-0 w-full h-full object-cover ${
        index % 4 === 0 || index % 4 === 3 ? "bg-blue" : "bg-purple"
      }`}
    >
      <div className="flex flex-col space-y-20 py-2 pr-2">
        <div>
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            className="float-right text-xl text-white "
          />
        </div>
        <div className="text-right font-lato">
          <div className="text-white text-xl font-bold">{item.name.common}</div>
          <div className="text-white font-bold">{item.population}</div>
        </div>
      </div>
    </div>
  </Link>
);
WeatherList.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.shape({
      common: PropTypes.string.isRequired,
    }).isRequired,

    population: PropTypes.number.isRequired,
    capital: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default WeatherList;
