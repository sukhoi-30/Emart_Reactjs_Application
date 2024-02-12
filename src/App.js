import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Product from './components/Product'
import { Routes, Route, Navigate } from 'react-router-dom'; 
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
