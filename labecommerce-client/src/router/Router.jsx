import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderNavbar } from '../components/HeaderNavbar/HeaderNavbar';
import CartPage from './../pages/CartPage/CartPage';
import HomePage from './../pages/HomePage/HomePage';
import Filters from '../components/Filters/Filters';
export default function Router() {
  return (
    <BrowserRouter>
      <HeaderNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}
