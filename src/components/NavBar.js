import lightlogo from "../images/blue.jpg";
import darklogo from "../images/logo.jpg";
import { ThemeButton, NavLinkStyled, Logo, NavStyled } from "../styles";
import SignupButton from "./buttons/SignupButton";
import SigninButton from "./buttons/SigninButton";

const NavBar = (props) => {
    return (
   <NavStyled className ="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className ="collapse navbar-collapse" id="navbarTogglerDemo01">
           <Logo to="/" className="navbar-brand">
           <img src={props.currentTheme === "light" ? lightlogo : darklogo}
             width="100"/>
             </Logo>
               <ul className="navbar-nav me-auto mb-lg-0">
              <ThemeButton onClick={props.toggleTheme}>
                {props.currentTheme==="light" ? "Dark" : "Light"} mode
               </ThemeButton>
               <SignupButton/>
               <SigninButton/>
                  <NavLinkStyled to="/products" className="nav-item">
                  Products
                  </NavLinkStyled>
                  <NavLinkStyled to="/shops" className="nav-item">
                  Shops
                  </NavLinkStyled>
              </ul>
                </div>
            </div>
        </NavStyled>
    );
};
export default NavBar;