import { Component, OnInit } from '@angular/core';
import { UserCartService } from '../services/user-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  numberOfItemsInCart: number = 0

  constructor(private userCartService: UserCartService) { }

  ngOnInit(): void {
    this.userCartService.numberOfItems$.subscribe(itemQty => {
      this.numberOfItemsInCart = itemQty
    })
  }

}
