import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/product/Product';
import Pricing from './pages/pricing/Pricing';
import Homepage from './pages/homePage/Homepage';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/appLayout/AppLayout';
import Login from './pages/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} /> {/* index = default = '/' */}
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<p>LIST</p>} />
          <Route path="cities" element={<p>List of cities</p>} />
          <Route path="countries" element={<p>Countries</p>} />
          <Route path="form" element={<p>form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
