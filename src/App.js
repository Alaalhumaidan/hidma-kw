import "./App.css";
import ProductList from "./components/ProductList";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { white } from "color-name";
import ProductDetail from "./components/ProductDetail";
import products from "./products";
//task 09 Route & Switch
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import ShopList from "./components/ShopList";
import NavBar from "./components/NavBar";
import ShopDetail from "./components/ShopDetail";

import {GlobalStyle, 
  ThemeButton,
  NavLinkStyled,
  Logo
  } from "./styles";
import { observer } from "mobx-react";
import productStore from "./stores/productStore";
import shopStore from "./stores/shopStore";
import Routes from "./components/Routes";

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
  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");

  };

  return (
    
    <div>
     <ThemeProvider theme={theme[currentTheme]}>
    <GlobalStyle/>

    <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme}/>
    { false ? (
     <h1> Loadinggg ... </h1> 
    ) : ( <Routes/> )}

    </ThemeProvider>
    </div>
  );
  }
//shopStore.loading && productStore.loading
export default observer(App);
