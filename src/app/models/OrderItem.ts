import { Product } from "./Product"

export class OrderItem {
    id: number
    product: Product
    qty: number

    constructor() {
        this.id = 0
        this.product = new Product()
        this.qty = 0
    }
}