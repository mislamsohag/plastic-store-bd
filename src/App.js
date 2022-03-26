import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import AllProducts from './AllProducts/AllProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import SideBar from './SideBar/SideBar';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const cartCountSet = () => {
    setCartCount(cartCount + 1);
  };
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='d-flex'>
        <AllProducts cartCountSet={cartCountSet} />
        <SideBar cartCount={cartCount} />


      </div>
    </div>
  );
}

export default App;
