import React, { useState } from "react";
import Customer from "../models/Customer";
import CustomerDumbComponent from "./CustomerDumbComponent";
import User from "../models/User";
import { addCustomer, getAllCustomer } from "../remote/CustomerAPI";

type Props = {user: User}

const CustomerSmartComponent:React.FC<Props> = (props)=> {
    const [customer, setCustomer] = useState<Customer[]>([])
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [gender, setGender] = useState<string>("")
    

    return(
    <div>
        <CustomerDumbComponent customer={customer} />
        <br/>
        <button onClick={ async () => { 
           let apiCustomers:Customer[] = await getAllCustomer(props.user);
        setCustomer(apiCustomers)}}
        >Get customer
        </button>
        <br/>
        <br/>
        <br/>
        <br/>
        <form>
            <input type="text" onChange={ (e) => {setName(e.target.value);}} 
            placeholder="Name" />
            <input type="text" onChange={ (e) => {setEmail(e.target.value);}} 
            placeholder="Email" />
            <input type="text" onChange={ (e) => {setGender(e.target.value);}} 
            placeholder="Gender" />
        </form>
            <br/>
        <button onClick={async () => {
            let result:number = await addCustomer (
                new Customer(0, name, email, gender),
                props.user
            );

            if (result === 201) {
                let apiCustomer:Customer[] = await addAllCustomer(props.user)
                setCustomer(apiCustomer)
            }    
        }}>
            Add customer
            </button>
    </div>)
}

export default CustomerSmartComponent;

function addAllCustomer(user: User): Customer[] | PromiseLike<Customer[]> {
    throw new Error("Function not implemented.");
}
