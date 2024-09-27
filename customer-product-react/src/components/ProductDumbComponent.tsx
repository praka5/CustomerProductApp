import React from "react";
import Product from "../models/Product";
import Table from 'react-bootstrap/Table';

type Props = {product:Product[]}

const ProductDumbComponent:React.FC<Props> = (props)=>{

        return(<Table responsive variant="success">
        <thead>
            <tr>
                <th>P_ID</th>
                <th>ProductName</th>
                <th>Quantity</th>
                <th>Price</th>
               
            </tr>
        </thead>
        <tbody>
            {props.product.map((product:Product)=>{
                return(<tr>
                    <td>{product.pid}</td>
                    <td>{product.productName}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                
                </tr>)
            })}
        </tbody>

    </Table>);
} 

export default ProductDumbComponent; 