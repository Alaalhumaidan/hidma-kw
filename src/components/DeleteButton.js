import { props } from "bluebird";
import { DeleteButtonStyled } from "../../styles";
const DeleteButton = () => {
    const handleDelete = () => {
        props.productDelete(props.product.id);

    };
    return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
};
export default DeleteButton;