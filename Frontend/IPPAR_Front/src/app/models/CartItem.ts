import { Product } from "./Product";

export class CartItem{
    constructor(
        public item:Product,
        public amount:number
    ){

    }
}