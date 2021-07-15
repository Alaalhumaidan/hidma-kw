import {ShopItemImage} from "../styles";
import { Link } from "react-router-dom";

const ShopItem = (shop) => {
    return (
 <>
 <p>{shop.name}</p>
 <Link to={`/shops/${shop.slug}`}>
     <ShopItemImage src={shop.image}/>
 </Link>
 </>
    )
};

export default ShopItem;