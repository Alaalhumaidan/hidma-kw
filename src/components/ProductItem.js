import {ProductWrapper} from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const ProductItem = (props)=>{
    
    return(
        <ProductWrapper>
       
            <img
            onClick={()=>props.setProduct(props.product)}
            alt ={props.product.name}
            src={props.product.image} 
            /> 
            <p> {props.product.name} </p>
            <p className="Products-Price">{props.product.price}KWD </p>
            <DeleteButton
            productDelete={props.productDelete}
            productId={props.product.id}
            setProduct={props.setProduct}
            />
        
        </ProductWrapper>
    );
};
export default ProductItem;