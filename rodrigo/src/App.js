import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import { ListProducts } from './Pages/ListProducts';
import { ProductsId } from './Pages/ListProducts/ProductsId';


const App = () => {
  return (
    <div className='App'>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ListProducts />} />
            <Route path='/ProductsId/:id' element={<ProductsId />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );

  }
export default App;
