import products from "../products";
import ProductItem from "./ProductItem";
import { ListWrapper, AiOutlinePlusCircleStyled} from "../styles";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { observer } from "mobx-react";
import ProductModal from "../modals/ProductModal";


// import ProductStore from "../stores/productStore";


    const ProductList = ({products, shop}) => {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    
    //filter of undefined??
    const productList = products
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
    <ProductModal 
    isOpen={isOpen} 
    closeModal={closeModal}
    shop={shop}
    />
    <ListWrapper> {productList}</ListWrapper>
     </div>
   
    );
};

export default observer(ProductList);