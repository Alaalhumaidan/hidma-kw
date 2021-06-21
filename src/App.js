import "./App.css";
import ProductList from "./components/ProductList";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { white } from "color-name";
import ProductDetail from "./components/ProductDetail";
import products from "./products";
//task 09
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import ligthlogo from "./images/blue.jpg";
import darklogo from "./images/logo.jpg";

import {GlobalStyle, 
  ThemeButton,
  NavLinkStyled,
  Logo
  } from "./styles";

const theme = {
  light: {
    mainColor: "#585858",
    backgroundColor: "#ffffff",
    red: "red",
  },
  dark:{
    mainColor: "#ffffff",
    backgroundColor: "#585858",
    red: "red", 
  }
  
};
function App() {
 
  const [currentTheme, setCurrentTheme] = useState("light");
  const [product, setProduct] = useState(null);
  const [_products, setProducts] = useState(products);
  
  const productDelete = (productId) => {
    const updatedProducts = _products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  }

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");

  };
  // const setView = () => {
  //   return product ? (
  //     <ProductDetail 
  //     product={product} 
  //     setProduct={setProduct}
  //     productDelete={productDelete}
  //     />
  //   ) : (
  //     <ProductList
  //     setProduct={setProduct}
  //     products={_products}
  //     productDelete={productDelete}
  //     />
  //   )
    // }
  return (
    
    <div>
     <ThemeProvider theme={theme[currentTheme]}>
    <GlobalStyle/>

    <Logo to="/">
    <img src={currentTheme === "light" ? ligthlogo : darklogo} width="10" />
    </Logo>

      <NavLinkStyled to ="/products">Products</NavLinkStyled>
  
    <ThemeButton onClick={toggleTheme}>
    {currentTheme === "light" ? "Dark" : "Light"} mode
    </ThemeButton>
    <Switch>
     <Route path="/products/:productSlug">
     <ProductDetail 
      currentTheme={currentTheme}
      products={_products} 
      setProduct={setProduct}
      productDelete={productDelete}
      />
     </Route>
      <Route path ="/products"> 
       <ProductList
        setProduct={setProduct}
        products={_products}
        productDelete={productDelete}
        /> 
      </Route>
       <Route exact path="/">
      <Home/>
      </Route>
    </Switch>


    </ThemeProvider>
    </div>
  );
  
  }

export default App;
