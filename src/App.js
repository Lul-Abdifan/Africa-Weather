import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CountryList from './components/Country';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="/Africa/:capital" element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
