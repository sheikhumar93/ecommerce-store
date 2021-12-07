import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Product;

  constructor() {
    this.item = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''
    }
  }

  ngOnInit(): void {
  }

}
