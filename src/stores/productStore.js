import products from "../products";
import {makeAutoObservable} from "mobx";
import slugify from "react-slugify";
import axios from "axios";

 class ProductStore{
     products = products;

     constructor(){
         //for when data is updated, compnents will be re rendered
         makeAutoObservable(this);
     }
   
     fetchProducts = async () => {
        //  console.log("Lets fetch some products");
        try{
    const response = await axios.get("http://localhost:8000/products");
    this.products = response.data;
        }catch(error){
        console.error("fetchProducts: ", error);
    }
     };
// async a synchronous : it will make the request 
 productDelete = async(productId)=> {
    // const updatedProducts = this.products.filter(
    //     (product) => product.id !== productId
    // );
    // this.product = updatedProducts;
    try{
        await axios.delete(`http://localhost:8000/products/${productId}`);
        const updatedProducts = this.products.filter(
            (product) => product.id !== productId
        );
        this.products = updatedProducts;
    }catch(error){
        console.error(error);
    }
    
 };

     getProducts = () => {
         this.products = products;
     };
 
    productCreate = (newProduct) => {
        newProduct.id = this.products.length+1;
        newProduct.slug = slugify(newProduct.name);
        this.products.push(newProduct);
    }
    productUpdate = (updatedProduct) => {
        const product = this.products.find((product) => product.id === updatedProduct.id);
        product.name = updatedProduct.name;
        product.price = updatedProduct.price;
        product.description = updatedProduct.description;
        product.image = updatedProduct.image;
        product.slug = slugify(updatedProduct.name);
    }
    
   
}
    const productStore = new ProductStore();
//  productStore.getProducts();
    productStore.fetchProducts();
 
export default productStore;
