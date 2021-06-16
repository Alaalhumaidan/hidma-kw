import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const ProductDetail = (props) => {
    return ( 
        <DetailWrapper>
            <img src={props.product.image} alt={props.product.name}/>
            <p>{props.product.name}</p>
            <p>{props.product.description}</p>
            <p>{props.product.price}KWD</p>
            <DeleteButton
            productDelete={props.productDelete}
            productID={props.product.id}
            setProduct={props.setProduct}
            />
             <button onClick={()=> props.setProduct(null)}>Back</button>
        </DetailWrapper>
    );
};
export default ProductDetail;