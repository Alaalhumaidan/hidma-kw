import products from "../products";
import ProductItem from "./ProductItem";
import { ListWrapper } from "../styles";
import SearchBar from "./SearchBar";
import { useState } from "react";
import product from "../products";

    const ProductList = (props) => {
    const [query, setQuery] = useState("");
    

    
    const productList = props.products
    .filter((product)=> product.name.toLowerCase().includes(query.toLowerCase()))
    .map((product) => (
        <ProductItem
        product={product}
        key={product.id}
        setProduct={props.setProduct}
        productDelete={props.productDelete}
/>
    ));
    return (
    <div>
    <SearchBar setQuery={setQuery}/>
    <ListWrapper> {productList}</ListWrapper>
    </div>
    );
};

export default ProductList;