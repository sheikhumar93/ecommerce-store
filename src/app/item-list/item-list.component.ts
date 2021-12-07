import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Product[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(res => {
      this.items = res
      this.itemService.products = res
    })
  }

}
