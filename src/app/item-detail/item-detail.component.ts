import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderItem } from '../models/OrderItem';
import { Product } from '../models/Product';
import { ItemService } from '../services/item.service';
import { UserCartService } from '../services/user-cart.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Product
  totalPrice: number = 0
  qtyOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  selectedQty: number = 1

  constructor(private router: Router, private route: ActivatedRoute, private itemService: ItemService, private userCartService: UserCartService) {
    this.item = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      url: ''
    }
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.item = this.itemService.getItem(id)
    this.totalPrice = this.item.price * this.selectedQty
  }

  onSubmit() {
    const orderItem: OrderItem = {
      id: this.item.id,
      product: this.item,
      qty: this.selectedQty
    }
    this.userCartService.addToOrder(orderItem)
    alert(`${this.item.name} added to cart`)
  }

  selectQty() {
    this.totalPrice = Math.round(this.item.price * this.selectedQty * 100) / 100
  }

  backToProducts() {
    this.router.navigate([''])
  }

}
