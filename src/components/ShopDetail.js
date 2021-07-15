import { useParams } from "react-router";
import productStore from "../stores/productStore";
import shopStore from "../stores/shopStore";
import { DetailWrapper } from "../styles";
import ProductList from "./ProductList";


const ShopDetail = () => {
    const {shopSlug} = useParams();
    const shop = shopStore.shops.find((shop)=>
    shop.slug === shopSlug
    );
    const products = shop.products.map(product =>
         productStore.getProductById(product.id));
    return (
        <>
        <DetailWrapper>
            <h4>{shop.name}</h4>
            <img src={shop.image} alt={shop.name}/>
        </DetailWrapper>
        <ProductList products = {products} shop={shop}/>
        </>
    );
};
export default ShopDetail;