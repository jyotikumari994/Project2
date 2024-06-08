// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/costonext" element={<div>CostcoNext Page</div>} />
        <Route path="/whilesupplieslast" element={<div>While Supplies Last Page</div>} />
        <Route path="/online-only" element={<div>Online-Only Page</div>} />
        <Route path="/treasure hunt" element={<div>Treasure Hunt Page</div>} />
        <Route path="/what'snew" element={<div>What's New Page</div>} />
        <Route path="/newlowerprice" element={<div>New Lower Price Page</div>} />
        <Route path="/getemailoffer" element={<div>Get Email Offer Page</div>} />
        <Route path="/customer service" element={<div>Customer Service Page</div>} />
        <Route path="/signin" element={<div>Sign In/Register Page</div>} />
        <Route path="/orders" element={<div>Order & Return Page</div>} />
        <Route path="/cart" element={<div>Cart Page</div>} />
        <Route path="/shop" element={<div>Shop Page</div>} />
        <Route path="/grocery" element={<div>Grocery Page</div>} />
        <Route path="/same-day" element={<div>Same Day Page</div>} />
        <Route path="/deals" element={<div>Deals Page</div>} />
        <Route path="/business-delivery" element={<div>Business Delivery Page</div>} />
        <Route path="/optical" element={<div>Optical Page</div>} />
        <Route path="/pharmacy" element={<div>Pharmacy Page</div>} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/photo" element={<div>Photo Page</div>} />
        <Route path="/travel" element={<div>Travel Page</div>} />
        <Route path="/membership" element={<div>Membership Page</div>} />
        <Route path="/locations" element={<div>Locations Page</div>} />
        <Route path="/listbuyagain" element={<div>List/Buy Again Page</div>} />
       
      </Routes>
    </div>
  );
}

export default App;
