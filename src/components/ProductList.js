import products from "../products";
import ProductItem from "./ProductItem";
import { ListWrapper } from "../styles";
import SearchBar from "./SearchBar";
import { useState } from "react";
import product from "../products";

const ProductList = () => {
    const [query, setQuery] = useState("");
    const productList = products
    .filter((product)=> product.name.toLowerCase().includes(query.toLowerCase()))
    .map((product) => (
        <ProductItem
        name={product.name}
        price={product.price}
        image={product.image}
        key={product.id}
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