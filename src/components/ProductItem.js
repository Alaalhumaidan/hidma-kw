import {ProductWrapper} from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import {Link} from "react-router-dom";
import { observer } from "mobx-react";
import UpdateButton from "../UpdateButton";

const ProductItem = (props)=>{
    
    return(
        <ProductWrapper>
         <Link to = {`/products/${props.product.slug}`}>
            <img
            alt ={props.product.name}
            src={props.product.image} 
            />
            </Link>
            <p> {props.product.name} </p>
            <p className="Products-Price">{props.product.price}KWD </p>
            <UpdateButton product={props.product}/>
            <DeleteButton productId={props.product.id} />
        </ProductWrapper>
    );
};
export default observer(ProductItem);