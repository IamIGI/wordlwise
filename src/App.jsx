import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CityList from './components/cityList/CityList';
import CountryList from './components/countryList/CountryList';
import City from './components/city/City';
import Form from './components/form/Form';
import { CitiesProvider } from './contexts/CitiesContext';
import { AuthProvider } from './contexts/FakeAuthContext';
import ProtectedRoutes from './pages/ProtectedRoutes';
import SpinnerFullPage from './components/spinnerFullPage/SpinnerFullPage';

// import Product from './pages/product/Product';
// import Pricing from './pages/pricing/Pricing';
// import Homepage from './pages/homePage/Homepage';
// import PageNotFound from './pages/PageNotFound';
// import AppLayout from './pages/appLayout/AppLayout';
// import Login from './pages/login/Login';

const Product = lazy(() => import('./pages/product/Product'));
const Pricing = lazy(() => import('./pages/pricing/Pricing'));
const Homepage = lazy(() => import('./pages/homePage/Homepage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const AppLayout = lazy(() => import('./pages/appLayout/AppLayout'));
const Login = lazy(() => import('./pages/login/Login'));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} /> {/* index = default = '/' */}
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoutes>
                    <AppLayout />
                  </ProtectedRoutes>
                }
              >
                <Route index element={<Navigate replace="cities" />} />
                <Route index element={<CityList />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
