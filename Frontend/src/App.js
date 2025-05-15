import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage'
import CatagoryItemList from './pages/CatagoryItemList/CatagoryItemList'
import SareeDEtails from './pages/SareeDetails/SareeDetails'
import ProductCRUD from './ProductCRUD';
import CarCard from './CarCard';


function App() {
  

  return (
    <div className="App">
     {/* <HomePage/> */}
     {/* <SareeDEtails/> */}
     {/* <CatagoryItemList/> */}
     {/* <ProductCRUD/> */}
<CarCard/>
    </div>
  );
}

export default App;
