import Customer from "../models/Customer";
import User from "../models/User";
import CustomerProductClient from "./CustomerProduct"



export const getAllCustomer = async(user:User):Promise<Customer[]>=>{
    const response = await CustomerProductClient.get<Customer[]>("/getAllCustomer",{
        auth:{username:user.username,
        password:user.password?user.password:""}});
        if(response.status===200){
            return response.data;
    
        }else{
            console.log(response);
            return[];
    
        }
    }

    export const addCustomer = async(customer:Customer, user:User):Promise<number>=>{
        let response =await CustomerProductClient.post("/addCustomer", customer,{
    
            auth:{username:user.username,
            password:user.password?user.password:""}});
            if(response.status!=200){
                console.log(response);
            }
    
            return response.status;
        }
