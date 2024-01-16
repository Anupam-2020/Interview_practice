import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ProductListing from './pages/product-listing';
import ProductDetails from './pages/product-details';
import Breadcrumbs from './Breadcrumbs';


function App() {

  return (
    <BrowserRouter>
      <div>
        <h1>Breadcrumbs App</h1>
        <Breadcrumbs />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<ProductListing />}/>
          <Route path='/products/:id' element={<ProductDetails />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
