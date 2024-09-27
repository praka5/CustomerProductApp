import React, { useState } from "react";
import Product from "../models/Product";
import ProductDumbComponent from "./ProductDumbComponent";
import User from "../models/User";
import { addProduct, getAllProduct } from "../remote/ProductAPI";


type Props = {user: User}

const ProductSmartComponent:React.FC<Props> = (props)=> {
    const [product, setProduct] = useState<Product[]>([])
    const [name, setName] = useState<string>("")
    const [quantity, setQuantity] = useState<number>()
    const [price, setPrice] = useState<number>()
    

    return(
    <div>
        <ProductDumbComponent product={product} />
        <br/>
        <button onClick={ async () => { 
           let apiProduct:Product[] = await getAllProduct(props.user);
        setProduct(apiProduct)}}
        >Get Product
        </button>
        <br/>
        <br/>
        <br/>
        <br/>
       
        <form>
            <input type="text" onChange={ (e) => {setName(e.target.value);}} 
            placeholder="Name" />
            <input type="number" onChange={ (e) => {setQuantity(Number(e.target.value));}} 
            placeholder="quantity" />
            <input type="number" onChange={ (e) => {setPrice(Number(e.target.value));}} 
            placeholder="price" />
        </form>
        <br/>
        <button onClick={async () => {
            let result:number = await addProduct (
                new Product(0, name, quantity, price),
                props.user
            )

            if (result === 201) {
                let apiProduct:Product[] = await addAllProduct(props.user)
                setProduct(apiProduct)
            }    
        }}>
            Add Product
            </button>
    </div>)
}

export default ProductSmartComponent;

function addAllProduct(user: User): Product[] | PromiseLike<Product[]> {
    throw new Error("Function not implemented.");
}
