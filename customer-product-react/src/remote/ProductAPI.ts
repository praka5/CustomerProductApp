import Product from "../models/Product";
import User from "../models/User";
import CustomerProductClient from "./CustomerProduct"



export const getAllProduct = async(user:User):Promise<Product[]>=>{
const response = await CustomerProductClient.get<Product[]>("/getAllProduct",{
    auth:{username:user.username,
    password:user.password?user.password:""}});
    if(response.status===200){
        return response.data;

    }else{
        console.log(response);
        return[];

    }
}

export const addProduct = async(product:Product, user:User):Promise<number>=>{
    let response =await CustomerProductClient.post("/addProduct", product,{

        auth:{username:user.username,
        password:user.password?user.password:""}});
        if(response.status!=200){
            console.log(response);
        }

        return response.status;
}