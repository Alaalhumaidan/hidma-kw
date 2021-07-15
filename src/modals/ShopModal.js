import Modal from "react-modal";
import { useState } from "react";
import shopStore from "../stores/shopStore";
import {CreateButtonStyled} from "../styles";
import { observer } from "mobx-react";

const ShopModal =(props)=> {
    const [shop, setShop] = useState({
        name:"",
        image: "",
    });
 

const handleChange = (event) => {
    setShop({ ...shop, [event.target.name]: event.target.value});
    console.log(shop);
};
const handleImage = (event) => {  
        setShop({...shop, image: event.target.files[0]});
};
const handleSubmit = (event) => {
   event.preventDefault();
   shopStore.shopCreate(shop);
    //shopStore
    props.closeModal();
}; 
return(
    <div>
        <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Shop Modal">
         <form onSubmit={handleSubmit}>
         <div className="form-group row">
         <div className="col-6">
             <label>Name</label>
             <input className="form-control"
             type="text"
             onChange={handleChange}
             name="name"
             value={shop.name}
             />
         </div>
         <div className="form-group">
             <label>Image</label>
             <input className="form-control"
             type="file"
             onChange={handleImage}
             name="image"/>
           
         </div>
</div>
         <CreateButtonStyled>
         {props.oldShop? "Update" : "Add" }
         </CreateButtonStyled>
         </form>
        </Modal>
    </div>
);
};
export default observer(ShopModal);