import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing'; 
import Instructions from './pages/Instructions'; 
import DecisionBotOrNot from './pages/DecisionBotOrNot';
import Categories from './pages/Categories';
import Category from './pages/Category';
import SubCategory from './pages/SubCategory';
import Gender from './pages/Gender';
import ProductSuggestion from './pages/ProductSuggestion';
import Product from './pages/Product';
import CheckOut from './pages/CheckOut';

function Routes(){
  return ( 
    <BrowserRouter>
      <Route path="/" component={Landing} exact />  
      <Route path="/instructions" component={Instructions} />  
      <Route path="/decisionBotOrNot" component={DecisionBotOrNot} />  
      <Route path="/categories" component={Categories} />  
      <Route path="/category" component={Category} />  
      <Route path="/gender" component={Gender} />  
      <Route path="/sub-category" component={SubCategory} />  
      <Route path="/product-suggestion" component={ProductSuggestion} />  
      <Route path="/product" component={Product} />  
      <Route path="/check-out" component={CheckOut} />  
    </BrowserRouter>
  );
}

export default Routes; 