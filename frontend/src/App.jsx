import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import ProductDetails from './components/ProductDetails'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'


function App() {

  return (
    <Router className="">
      <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path='/product/:id' element={ <ProductDetails/> }/>
        <Route path='/about' element={ <About/>}/>
        <Route path='/contact' element={ <Contact/> }/>
        <Route path='/products' element={ <Products />}/>
      </Routes>
      
    </Router>
  )
}

export default App
