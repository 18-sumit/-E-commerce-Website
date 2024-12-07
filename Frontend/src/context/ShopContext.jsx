/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextWrapper = (props) => {
    // we'll create some global vairables which we can use throughout website , can also change in one click

    const currency = "$";
    const delivery_fee = 10;

    const [search , setSearch] = useState('');
    const [showSearch , setShowSearch] = useState(false)

    const value = {
        products,
        currency,
        delivery_fee,
        search ,
        setSearch,
        showSearch,
        setShowSearch,
    };

    return (
        <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
    );
};

export default ShopContextWrapper;
