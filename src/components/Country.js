import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryData } from '../redux/features/weatherSlice';
import WeatherList from './WeatherList';
import logo from '../asset/AfricaMap.jpeg';
import Loading from './Loading';

const CountryList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountryData());
  }, [dispatch]);
  const { data, status, error } = useSelector((state) => state.weather);
  // if (status === 'loading') return <Loading />;
  // if (error) {
  //   return (
  //     <h1 className="text-white font-bold text-2xl text-center pt-16">
  //       {error}
  //     </h1>
  //   );
  // }

  return (
    <div>
      <div>
        <div>
          <ul className="flex justify-between p-2 bg-[rgb(4, 59, 57)] text-white">
            <li className="text-white text-xl">Weather in Africa</li>
            <li className="text-white text-xl ">MAMA AFRICA</li>
            <li className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </li>
          </ul>
        </div>
        <div>
          <img src={logo} alt="Africa Map" className="h-80 w-full" />
        </div>
      </div>
      <div>
        <h1 className="w-full text-white px-10 py-2 forecast">
          Africa Country
          {' '}
          <select className="bg-blue ml-2 border rounded-md outline-none">
            <option
              value="option1"
              className="bg-blue border border-blue  text-blue"
            >
              All
            </option>
          </select>
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row">
          {data.map((item, index) => (
            <WeatherList item={item} index={index} key={item.name.common} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryList;
