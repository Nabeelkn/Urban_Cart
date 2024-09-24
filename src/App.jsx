
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Products from './Pages/Products'
import { ProductProvider } from './Context/productContext'
import Cart from './Pages/Cart'

function App() {

  return (
    <>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ProductProvider>
    </>
  )
}

export default App
