import { CartItem } from "../redux/cart/types";



export const calcTotaPrice = (items: CartItem[]) => {
    return items.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum;
    }, 0)
}