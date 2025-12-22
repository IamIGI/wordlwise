import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Product from './pages/product/Product';
import Pricing from './pages/pricing/Pricing';
import Homepage from './pages/homePage/Homepage';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/appLayout/AppLayout';
import Login from './pages/login/Login';
import CityList from './components/cityList/CityList';
import CountryList from './components/countryList/CountryList';
import City from './components/city/City';
import Form from './components/form/Form';
import { CitiesProvider } from './contexts/CitiesContext';

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} /> {/* index = default = '/' */}
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace="cities" />} />
            <Route index element={<CityList />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
