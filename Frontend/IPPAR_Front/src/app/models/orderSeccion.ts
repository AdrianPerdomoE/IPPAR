import { Product } from "./Product";

export class OrderSeccion {
    constructor(
        public storeId: string,
        public storeName: string,
        public storeLat: string,
        public storeLon: string,
        public items: Product[],
        public amount: number
    ) { }
}