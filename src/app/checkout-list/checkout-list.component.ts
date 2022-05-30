import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart } from '../cart-list/cart.model';

@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrls: ['./checkout-list.component.css'],
})
export class CheckoutListComponent implements OnInit {
  cartsState: Observable<{ carts: Cart[] }>;
  constructor(
    private store: Store<{
      carts: {
        carts: Cart[];
      };
    }>
  ) {}

  ngOnInit(): void {
    this.cartsState = this.store.select('carts');
  }
}
