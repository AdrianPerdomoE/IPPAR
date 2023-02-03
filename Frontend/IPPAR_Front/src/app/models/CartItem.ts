import { Product } from "./Product";

export class CartItem{
    constructor(
        public item:Product,
        public amount:number,
        public storeName:string,
        public storeId:string
    ){

    }
}