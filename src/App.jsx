import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/product/Product';
import Pricing from './pages/pricing/Pricing';
import Homepage from './pages/homePage/Homepage';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/appLayout/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
