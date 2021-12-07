import { OrderItem } from "./OrderItem";

export class Order {
    id: number;
    items: OrderItem[]

    constructor() {
        this.id = 0
        this.items = [new OrderItem()]
    }
}