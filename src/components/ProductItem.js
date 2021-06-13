import {ProductWrapper} from "../styles";
const ProductItem = (props)=>{
    return(
        <ProductWrapper>
        <center>
            <img alt={props.name} src={props.image} /> 
            <p> {props.name} </p>
            <p className="Products-Price">{props.price}KWD </p>
        </center>
        </ProductWrapper>
    );
};
export default ProductItem;