import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background-color: ${(props)=> props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor};
}`;

export const Title = styled.h1`
text-align: center;
`;

export const Description = styled.h4`
text-align: center;
`;

export const ShopImage = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width:250px;
height:250px;
margin: 10;

`;
export const ListWrapper = styled.div`
display: flex;
align-items: center;
justify-contents: center;
text-align: center;
`;

export const ProductWrapper= styled.div`
margin:20px

img{
    width:250px;
    height:250px;

}
p{
    text-align: center;
    &.product-price{
        color: ${(props)=> props.theme.mainColor};
    }
}
`;
export const ThemeButton = styled.button`
font-size : 1em;
margin: 1.25em;
padding:0.25em 1em;
border-radius: 3px;
background-color: ${(props)=> props.theme.mainColor};
color: ${(props)=> props.theme.backgroundColor};
`;

export const SearchBarStyled = styled.input`
padding:0.5rem;
margin: 1rem auto;
display: block;
width: 40%
`;
export const DetailWrapper= styled.div`
margin:20px
`;

export const DeleteButtonStyled= styled.p`
color: ${props => props.theme.red};
`;