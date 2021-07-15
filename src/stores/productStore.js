import products from "../products";
import {makeAutoObservable} from "mobx";
import slugify from "react-slugify";
import instance from "./instance";

 class ProductStore{
     products = [];
    loading = true;
     constructor(){
         //for when data is updated, compnents will be re rendered
         makeAutoObservable(this);
     }
   
     fetchProducts = async () => {
        try{
    const response = await instance.get("/products");
    this.products = response.data;
    this.loading= false;
        }catch(error){
        console.error("fetchProducts: ", error);
    }
     };
// async a synchronous : it will make the request 
 productDelete = async(productId)=> {

    try{
        await instance.delete(`/products/${productId}`);
        const updatedProducts = this.products.filter(
            (product) => product.id !== productId
        );
        this.products = updatedProducts;
    }catch(error){
        console.error(error);
    }
    
 };

    productCreate = async(newProduct, shop) => {
        try{
            const formData = new FormData();
            for (const key in newProduct) formData.append(key,newProduct[key]);
            const response = await instance.post(
                "/shops/${shop.id}/products",
                formData
            );
            this.products.push(response.data);
            shop.products.push({id: response.data.id})
        } catch (error){
            console.error(error);
        }
  
    };
    productUpdate = async (updatedProduct) => {
        try {
            const formData = new FormData();
            for (const key in updatedProduct) formData.append(key,updatedProduct[key]);
            const response = await instance.put(
            `/products/${updatedProduct.id}`,
            formData
            );
       const product = this.products.find(
      (product) => product.id === response.data.id);
    for( const key in product) product[key] = response.data[key];
    } catch (error) {
        console.log(error);
    }
    };
    getProductId = (productId)=>
    this.products.find((product)=>
    product.id === productId);   
}
    const productStore = new ProductStore();
    productStore.fetchProducts();
 
export default productStore;
