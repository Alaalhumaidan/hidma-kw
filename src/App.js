import "./App.css";
import ProductList from "./components/ProductList";
import {GlobalStyle, Title, Description, ShopImage} from "./styles";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeButton } from "./styles";
import { white } from "color-name";
import ProductDetail from "./components/ProductDetail";


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

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };
  const setView = () => {
    return product ? (
      <ProductDetail product={product}/>
    ) : (
      <ProductList setProduct={setProduct}/>
    );
  };
  return (
    
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
    alt = "shop"
    src = "https://lh3.googleusercontent.com/kaJ1E5-rbrWqetVwaH0s5hOj4KX-gQgmcbQ4dePnrUk1-VLx52e6srmod_jpO0neoBlyW28r5qVJz2IFL0ZqRsvhvLDfJagCBlxAM6rn_plnBvtX_Tf8_2rN6Waav1ed7ZltLMXiXl5wTu93hzLBstKAUn3uNHbsNSqKUBCOsGrq98IwK9t-c54RjjqDuwtVgO5f_wu8njRPG3tge5mqjZO66LYpKE6oc-dG5GnqxDzKxO4SA2CSyG9fqnY2QQ75AHcJc7DDQQM9V8nx1QSEMLH3Tj-gI_bnqPd3ats5aTyO74QcUDfY7GClh_2WBwfhNf0HBBdqPVi8fiOcUOaMBjSyKkItYLplZvrgx3qI8fe0iOhSJ9_m7ZPPNRoD328nirJFbt9ksAcVtc4OyxvVNeLey-1J-iyi3NC9a9uMuSQ9Sv6y2snJQlUjoCYR035a911OrZrny8jEx34RQTE4PUf4t639SFgiw4XWqjNCnBr5pXnmh4qaZoiDNd1F44L1eFFLDRiYwRr5mCrkIJymHKt3gUGBgswVLoCo8rtG7-_c3f14xfhQrAHSOtS282Cqs1P3uGUEXOrq0v4q5VmAodskvHlNtFmEqW-fbuYfMMikiWCIW9Yy4pp7qSGNuGRNw45gC6-kAcFZovNjf9xU0z4JVf3AD40hmPTJERdpoIpCSEwUROwqYUPF7iWQYnKKcRnJeMYFBXoQYSX_QhEWtZ9i=w865-h903-no?authuser=0"     
     />
     </div>
    {setView()}
    </ThemeProvider>
    </div>
  );
  
  }

export default App;
