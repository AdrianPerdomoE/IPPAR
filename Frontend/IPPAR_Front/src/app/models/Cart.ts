import { CartItem } from "./CartItem";

export class Cart {
    constructor(
        public _id: string,
        public cartItems: CartItem[],
        public userId: string,
        public toPay: number,
        public cantidadItems:number
    ) { }
   
}