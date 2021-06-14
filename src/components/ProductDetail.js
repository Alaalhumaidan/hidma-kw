import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
    return ( 
        <DetailWrapper>
            <img src={props.product.image} alt={props.product.name}/>
            <p>{props.product.name}</p>
            <p>{props.product.description}</p>
            <p>{props.product.price}KWD</p>
            <button onClick={()=> props.setProduct(null)}>Back</button>
        </DetailWrapper>
    );
};
export default ProductDetail;