import React from 'react';
import ProductList from "./ProductList";
import { ThemeProvider } from "styled-components";
import ProductDetail from "./ProductDetail";
import { Route, Switch } from "react-router";
import Home from "./Home";
import ShopList from "./ShopList";
import ShopDetail from "./ShopDetail";
import {GlobalStyle, 
    ThemeButton,
    NavLinkStyled,
    Logo
    } from "../styles";
  import productStore from "../stores/productStore";

const Routes = () => {

return(
 <div>   


<Switch>
 <Route path="/products/:productSlug">
 <ProductDetail />
 </Route>
  <Route path ="/products"> 
   <ProductList products={productStore.products}/> 
  </Route>
  <Route path ="/shops/:shopSlug"> 
   <ShopDetail/> 
  </Route>
  <Route path ="/shops"> 
   <ShopList/> 
  </Route>
   <Route exact path="/">
  <Home/>
  </Route>
</Switch>
</div>
)
}
    

    export default Routes;