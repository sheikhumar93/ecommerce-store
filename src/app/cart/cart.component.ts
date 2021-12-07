import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../models/Order';
import { OrderItem } from '../models/OrderItem';
import { UserCartService } from '../services/user-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  fullName: string = ''
  address: string = ''
  creditCard: string = ''
  order: Order = new Order()
  totalPrice: number = 0
  cartEmpty: boolean = true

  constructor(private router: Router, private userCartService: UserCartService) { }

  ngOnInit(): void {
    this.order = this.userCartService.getOrder()
    if (this.order.id != 0) {
      this.cartEmpty = false
    }
    this.totalPrice = Math.round(this.userCartService.getTotalPrice() * 100) / 100
  }

  onSubmit() {
    this.userCartService.resetOrder()
    this.router.navigate(['order-complete'])
  }

  deleteItemFromCart(item: OrderItem) {
    this.userCartService.removeFromOrder(item)
    if (this.order.items.length === 0) {
      this.cartEmpty = true
    }
  }

}
