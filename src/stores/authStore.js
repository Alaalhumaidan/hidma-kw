import { makeAutoObservable } from "mobx";
import instance from "./instance";

class UserStore {
users = [] ;
loading = true;
constructor(){
makeAutoObservable(this);
}

 signup = async(newUser) => {
    try{
    const response = await instance.post("/signup", newUser);
    } catch (error){
        console.error(error);
    }
};
}
const authStore = new UserStore();
export default authStore;