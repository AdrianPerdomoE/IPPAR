import { OrderItem } from "./OrderItem";

export class Order {
    constructor(
        public _id: string,
        public userId: string,
        public generateDate: Date,
        public deliveryDate: Date,
        public orderItems: OrderItem[],
        public toPay: number
    ) { }
}