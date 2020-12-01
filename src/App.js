import React from 'react';
import Inventory from './Inventory/inventoryComponent';
import './App.css';

function App() {
  return(
      <div className = "container">
          <h1>New Inventory</h1>
          <Inventory name = "Men Suits" StockCount = "30" Price = "$300" />
          <Inventory name = "Men Jeans" StockCount = "20" Price ="$150" />
          <Inventory name = "Women Suits" StockCount = "10" Price = "$55" />
          <Inventory name = "Men Shoes" StockCount = "100" Price = "$150" />
          <Inventory name = "Socks" StockCount = "40" Price = "$15" />

      </div>
  );
}

export default App;