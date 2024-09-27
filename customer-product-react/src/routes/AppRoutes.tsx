import React from "react";


import {Route, Routes} from "react-router-dom";
import ProductSmartComponent from "../components/ProductSmartComponent";
import CustomerSmartComponent from "../components/CustomerSmartComponent";
import User from "../models/User";


type Props = { user:User}
const AppRoutes:React.FC<Props> = (props)=> {

    return(<Routes>

            
            <Route path="/customer" element={<CustomerSmartComponent user={props.user} />} />
            <Route path="/product" element={<ProductSmartComponent user={props.user} />} />
    

    </Routes>);


}

export default AppRoutes;