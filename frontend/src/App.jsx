import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
// import SignIn from './pages/Sigin&Sigup/SignIn'
// import SignUp from './pages/Sigin&Sigup/SignUp'
const App = () => {
  return (
    <div className='app'>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          {/* <Route path="/signin" element={<SignIn />}/>
         <Route path="/signup" element={<SignUp />} /> */}
        </Routes>
      
    </div>
  );
}

export default App;
