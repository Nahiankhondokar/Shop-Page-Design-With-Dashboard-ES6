import { useEffect, useState } from 'react';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Shop from './Component/Pages/Shop';
import SingleProduct from './Component/Pages/SingleProduct';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home';
import Dashboard from './Component/Admin/Dashboard';
import Category from './Component/Admin/Category';
import Tag from './Component/Admin/Tag';
import Product from './Component/Admin/Product';
import AddTag from './Component/Admin/AddItems/AddTag';
import AddProduct from './Component/Admin/AddItems/AddProduct';
import axios from 'axios';
import ViewProduct from './Component/Admin/AddItems/ViewProduct';
import EditProduct from './Component/Admin/AddItems/EditProduct';
import './_assets/css/bundle.css';
import './_assets/css/style.css';
import './App.css';



function App() {


  return (
    <>
    

    
      <Header />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/shop" element={ <Shop /> } />
        <Route path="/shop/:slug" element={ <SingleProduct /> } />

        {/* Nested Routing */}
        <Route path="/admin" element={ <Dashboard /> }>
          <Route path="/admin/category" element={ <Category /> } />
          <Route path="/admin/tag" element={ <Tag /> } />
          <Route path="/admin/add-tag" element={ <AddTag /> } />
          <Route path="/admin/product" element={ <Product  /> } />
          <Route path="/admin/add-product" element={ <AddProduct  /> } />
          <Route path="/admin/product-view/:id" element={ <ViewProduct /> } />
          <Route path="/admin/product-edit/:id" element={ <EditProduct /> } />
        </Route>

      </Routes>
    
      <Footer />



  
  
    
    </>
  );
}

export default App;
