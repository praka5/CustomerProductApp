import React from "react";
import Customer from "../models/Customer";
import Table from 'react-bootstrap/Table';


type Props = {customer:Customer[]}

const CustomerDumbComponent:React.FC<Props> = (props)=>{

    return(<Table responsive variant="success">
        <thead>
            <tr>
            <th style={{color:"Blue"}}>C_ID</th>
            <th style={{color:"Blue"}}>CustomerName</th>
            <th style={{color:"Blue"}}>E-mail</th>
            <th style={{color:"Blue"}}>Gender</th>
            </tr>
        </thead>
        <tbody>
            {props.customer.map((customer:Customer)=>{
                return(<tr>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.gender}</td>
                </tr>)
            })}
        </tbody>
       </Table>);
} 

export default CustomerDumbComponent; 