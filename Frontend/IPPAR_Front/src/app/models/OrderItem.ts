import { Product } from "./Product";

export class OrderItem {
    constructor(
        public storeId: string,
        public storeName: string,
        public storeLat: string,
        public storeLon: string,
        public item: Product,
        public amount: number
    ) { }
}