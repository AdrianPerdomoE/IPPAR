import { OrderItem } from "./OrderItem";

export class Order {
    constructor(
        public _id: string,
        public userId: string,
        public generateDate: string,
        public deliveryDate: string,
        public orderItems: OrderItem[],
        public toPay: number
    ) { }
}