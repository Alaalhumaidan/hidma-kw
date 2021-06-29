import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { useParams, Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import ProductStore from "../stores/productStore";
import { observer } from "mobx-react";

const ProductDetail = (props) => {
const productSlug = useParams().productSlug;
const product = ProductStore.products.find((product) => product.slug === productSlug);

    if (!product) return <Redirect to="/products"/>
    return( 
        <DetailWrapper>
            <img src={product.image} alt={product.name}/>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}KWD</p>
            <DeleteButton productID={product.id} />
            <Link to= "/products">
           {props.currentTheme==="light" ? <button type="button" className="btn btn-dark">Back</button> : <button type="button" className="btn btn-light">Back</button> }
            </Link>
        </DetailWrapper>
        // === ? is an if statement 
    );
};
export default observer(ProductDetail);