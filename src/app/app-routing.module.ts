import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';

const routes: Routes = [{
  path: '', component: HomeComponent,
}, {
  path: 'cart', component: CartComponent
}, {
  path: 'items/:id', component: ItemDetailComponent
}, {
  path: 'order-complete', component: OrderCompleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
