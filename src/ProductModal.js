import Modal from "react-modal";
import { useState } from "react";
import productStore from "./stores/productStore";
import {CreateButtonStyled} from "./styles";

const ProductModal =(props)=> {
    const [product, setProduct] = useState(
        props.oldProduct
        ? props.oldProduct
        :
        {
        name: "",
        price: 0,
        description: "",
        images: "",
        }
    );

const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value});
    console.log(product);
};
const handleSubmit = (event) => {
    event.preventDefault();
    if (props.oldProduct) productStore.productUpdate(product);
    productStore.productCreate(product);
    //productStore
    props.closeModal();
};
return(
    <div>
        <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Product Modal">
         <form onSubmit={handleSubmit}>
         <div className="form-group row">
         <div className="col-6">
             <label>Name</label>
             <input className="form-control"
             type="text"
             onChange={handleChange}
             name="name"/>
             value={product.name}
         </div>
        <div className="col-6">
            <label>Price</label>
            <input className="form-control"
            type="number"
            onChange={handleChange}
             name="price"/>
             value={product.price}
         </div>
         <div className="form-control">
             <label>Description</label>
             <input className="form-control"
             type="text"
             onChange={handleChange}
             name="description"/>
             value={product.description}
         </div>
         <div className="form-group">
             <label>Image</label>
             <input className="form-control"
             type="text"
             onChange={handleChange}
             name="image"/>
             value={product.image}
         </div>
</div>
         <CreateButtonStyled>
         {props.oldProduct ? "Update" : "Add" }
         </CreateButtonStyled>
         </form>
        </Modal>
    </div>
);
};
export default ProductModal;