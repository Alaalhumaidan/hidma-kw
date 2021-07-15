import { useState } from "react";
import shopStore from "../stores/shopStore";
import { observer } from "mobx-react";
import { Title, AiOutlinePlusCircleStyled} from "../styles";
//components
import ShopItem from "./ShopItem";
import SearchBar from "./SearchBar";
import ShopModal from "../modals/ShopModal";

const ShopList = () => {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const shops = shopStore.shops
    .filter((shop)=> shop.name.toLowerCase().includes(query.toLowerCase()))
    .map((shop)=> <ShopItem shop={shop}/>);
    return (
        <div className="container">
            <Title>Shops</Title>
            <SearchBar setQuery={setQuery}/>
            <AiOutlinePlusCircleStyled size="2em" onClick={openModal}/>
            <ShopModal 
            isOpen={isOpen} 
            closeModal={closeModal}/>
            {shops}
        </div>
    );
};

export default observer(ShopList);