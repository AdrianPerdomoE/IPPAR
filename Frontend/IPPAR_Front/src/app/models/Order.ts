import { OrderGroup } from "./OrderGroup";

export class Order {
    constructor(
        public _id: string,
        public userId: string,
        public generateDate: Date,
        public deliveryDate: Date,
        public orderGroups: OrderGroup[],
        public toPay: number
    ) { }
}