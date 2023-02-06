import { OrderSeccion } from "./orderSeccion";

export class Order {
    constructor(
        public _id: string,
        public userId: string,
        public generateDate: Date,
        public deliveryDate: Date,
        public orderSeccions: OrderSeccion[],
        public toPay: number
    ) { }
}