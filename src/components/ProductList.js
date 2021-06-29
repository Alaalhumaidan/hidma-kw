import products from "../products";
import ProductItem from "./ProductItem";
import { ListWrapper, AiOutlinePlusCircleStyled} from "../styles";
import SearchBar from "./SearchBar";
import { useState } from "react";
import productStore from "../stores/productStore";
import { observer } from "mobx-react";
import ProductModal from "../ProductModal";


// import ProductStore from "../stores/productStore";


    const ProductList = () => {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    
    //filter of undefined??
    const productList = productStore.products
    .filter((product)=> product.name.toLowerCase().includes(query.toLowerCase()))
    .map((product) => 
        <ProductItem
        product={product}
        key={product.id}

/>
    );
    return (
    <div>
    <SearchBar setQuery={setQuery}/>
    <AiOutlinePlusCircleStyled size="2em" onClick={openModal}/>
    <ProductModal isOpen={isOpen} closeModal={closeModal}/>
    <ListWrapper> {productList}</ListWrapper>
    {/* <ProductStore/> */}
     </div>
   
    );
};

export default observer(ProductList);