import { Product } from "./Product";

export class OrderGroup {
    constructor(
        public storeId: string,
        public storeName: string,
        public items: Product[],
        public amounts: number[]
    ) { }
}