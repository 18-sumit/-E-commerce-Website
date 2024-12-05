import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextWrapper = (props) => {
    // we'll create some global vairables which we can use throughout website , can also change in one click

    const currency = "$";
    const delivery_fee = 10;

    const value = {
        products,
        currency,
        delivery_fee,
    };

    return (
        <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
    );
};

export default ShopContextWrapper;
