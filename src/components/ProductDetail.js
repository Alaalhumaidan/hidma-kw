import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";

const ProductDetail = (props) => {
const productSlug = useParams().productSlug;
const product = props.products.find((product) => product.slug === productSlug);
    return ( 
        <DetailWrapper>
            <img src={product.image} alt={product.name}/>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}KWD</p>
            <DeleteButton
            productDelete={props.productDelete}
            productID={product.id}

            // setProduct={props.setProduct}
            />
            <Link to= "/products">
           {props.currentTheme==="light" ? <button type="button" className="btn btn-dark">Back</button> : <button type="button" className="btn btn-light">Back</button> }

            </Link>
        </DetailWrapper>
        // === ? is an if statement 
    );
};
export default ProductDetail;

// <button type="button" class="btn btn-light">Light</button>