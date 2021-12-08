import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Order } from '../models/Order';
import { OrderItem } from '../models/OrderItem';

@Injectable({
  providedIn: 'root'
})
export class UserCartService {
  order = new Order()
  numberOfItems = new Subject<number>()
  numberOfItems$ = this.numberOfItems.asObservable()

  constructor() { }

  addToOrder(orderItem: OrderItem): void {
    if (this.order.id === 0) {
      this.order.id = 1,
        this.order.items[0] = orderItem
    } else {
      for (let i = 0; i < this.order.items.length; i++) {
        if (this.order.items[i].id === orderItem.id) {
          // console.log('Matched', this.order.items[i].qty, orderItem.qty)

          this.order.items[i].qty = Number(this.order.items[i].qty) + Number(orderItem.qty)
          this.numberOfItems.next(this.order.items.length)
          return
        }
      }
      this.order.items.push(orderItem)
    }
    this.numberOfItems.next(this.order.items.length)
  }

  getOrder(): Order {
    return this.order
  }

  getTotalPrice(): number {
    let totalPrice = 0
    for (let item of this.order.items) {
      totalPrice += item.product.price * item.qty
    }
    return totalPrice
  }

  removeFromOrder(item: OrderItem) {
    this.order.items = this.order.items.filter(i => i.id !== item.id)
    this.numberOfItems.next(this.order.items.length)
  }

  resetOrder() {
    this.order = new Order()
    this.numberOfItems.next(0)
  }
}
