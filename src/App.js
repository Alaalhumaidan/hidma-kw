import "./App.css";
import ProductList from "./components/ProductList";
import {GlobalStyle, Title, Description, ShopImage} from "./styles";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeButton } from "./styles";
import { white } from "color-name";


const theme = {
  light: {
    mainColor: "bisque",
    backgroundColor: "bisque",
  },
  dark:{
    mainColor: "#000000",
    backgroundColor: "#000000", 
  }
  
};
function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  }
  return(
    <div>
    <ThemeProvider theme={theme[currentTheme]}>
    <GlobalStyle/>
  <div>
    <ThemeButton onClick={toggleTheme}>
    {currentTheme === "light" ? "Dark" : "Light"} mode
    </ThemeButton>
     <Title>Gifts and Apparels</Title>
     <Description>Hidma celebrates your occasions in  unique way</Description> 
     <ShopImage
     alt="shop"
     src="https://i.pinimg.com/236x/ac/03/0e/ac030e55eb9ba6f6a0a3acce25de04be--logotype-design-logos.jpg"
     
     />
     </div>
    <ProductList/>
    </ThemeProvider>
    </div>
  );
  }

export default App;
