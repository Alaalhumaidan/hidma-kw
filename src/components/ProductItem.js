import {ProductWrapper} from "../styles";
const ProductItem = (props)=>{
    return(
        <ProductWrapper>
            <img alt={props.name} src={props.image} /> 
            <p> {props.name} </p>
            <p className="Products-Price">{props.price}KWD </p>
        </ProductWrapper>
    );
};
export default ProductItem;