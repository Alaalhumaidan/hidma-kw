import { DeleteButtonStyled} from "../../styles";
import ProductStore from "../../stores/productStore";

const DeleteButton = (props) => {
    const handleDelete = () => {
        ProductStore.productDelete(props.productId);
        
    };
    return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
};
export default DeleteButton;