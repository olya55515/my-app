import { CartItem } from "../redux/cart/types";
import { calcTotaPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = calcTotaPrice(items)

    return {
        items: items as CartItem[],
        totalPrice

    }
}