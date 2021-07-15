import { makeAutoObservable } from "mobx";
import axios from "axios";


class ShopStore {
shops = [] ;
loading = true;
constructor(){
    makeAutoObservable(this);
}
fetchShops = async () => {
    try{
const response = await axios.get("http://localhost:8000/shops");
// here data is fetched 
this.shops = response.data;
this.loading= false;
    }catch(error){
    console.error("fetchShops: ", error);
}
 };
 shopCreate = async(newShop) => {
    try{
        const formData = new FormData();
        for (const key in newShop) formData.append(key,newShop[key]);
        const response = await axios.post(
            "http://localhost:8000/shops",
            formData
        );
        this.shops.push(response.data);
    } catch (error){
        console.error(error);
    }
};
}
const shopStore = new ShopStore();
shopStore.fetchShops();

export default shopStore;