import {ProductWrapper, DeleteButtonStyled} from "../styles";
const ProductItem = (props)=>{
    const handleDelete = () => {
        props.productDelete(props.product.id);
    };
    return(
        <ProductWrapper>
        <center>
            <img
            onClick={()=>props.setProduct(props.product)}
            alt ={props.product.name}
            src={props.product.image} 
            /> 
            <p> {props.product.name} </p>
            <p className="Products-Price">{props.product.price}KWD </p>
            <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
        </center>
        </ProductWrapper>
    );
};
export default ProductItem;