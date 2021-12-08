import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Product;
  @Input() cartItem: boolean
  @Output() removeItem = new EventEmitter()

  constructor() {
    this.item = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''
    }
    this.cartItem = false
  }

  ngOnInit() {
  }

}
