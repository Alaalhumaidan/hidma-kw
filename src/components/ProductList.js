import products from "../products";
import ProductItem from "./ProductItem";

const ProductList = () => {
    const productList = products.map((product)=>(
        <ProductItem
        name={product.name}
        price={product.price}
        image={product.image}
        id={product.id}
/>
    ));
    return <ListWrapper> {productList}</ListWrapper>
};

export default ProductList;