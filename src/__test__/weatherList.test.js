import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import WeatherList from "../components/WeatherList";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
describe("Country Weather List render", () => {
  const mockStore = configureStore();
  const newState = {
    data: [{ country: "Ethiopia", population: 120000000 }],
    forecast: "",
    status: "idle",
    error: null,
  };

  test("should return the correct state", () => {
    const countryListStore = mockStore(newState);
    countryListStore.dispatch({
      type: "fetch/CountryData",
      payload: { taker: newState },
    });
    expect(countryListStore.getState()).toEqual(newState);
  });

  test("should render the home page with the correct data", () => {
    // Arrange
    const newState = {
      data: [
        {
          name: { common: "Ethiopia" },
          population: 120000000,
          capital: "Addis Ababa",
        },
      ],
      forecast: "",
      status: "idle",
      error: null,
    };

    const countryListStore = mockStore(newState);

    // Act
    render(
      <Provider store={countryListStore}>
        <MemoryRouter>
          <WeatherList
            item={countryListStore.getState().data[0]}
            index={0}
            
          />
        </MemoryRouter>
      </Provider>
    );

    // Assert
    const countryElement = screen.getByText(/Ethiopia/i);
    const populationElement = screen.getByText(/120000000/i);

    expect(countryElement).toBeInTheDocument();
    expect(populationElement).toBeInTheDocument();
  });
});
