import React from "react";
import { Title, Description, ShopImage} from "../styles";
import LOGO from "../images/logo.jpg";

const Home = () => {
    return(
<div>
<Title>Gifts and Apparels</Title>
<Description>Hidma celebrates your occasions in  unique way</Description> 
 
<ShopImage
alt = "shop"
src = {LOGO}    
/>
</div>
    );
};

export default Home;