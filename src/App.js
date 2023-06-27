// import logo from './logo.svg';
// import './App.css';

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Routes, Route } from "react-router-dom";
// import { Products } from "./components/Product";
import { Cart } from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/product" element={<Products />} /> */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Hero />
    </div>
  );
}

export default App;
