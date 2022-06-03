import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Cart } from '../cart-list/cart.model';

@Component({
  selector: 'app-checkout-total',
  templateUrl: './checkout-total.component.html',
  styleUrls: ['./checkout-total.component.css'],
})
export class CheckoutTotalComponent implements OnInit {
  total_amount: number = 0;
  shipping_fee: number = 0;
  order_total: number = 0;
  cartsState: Observable<{ carts: Cart[]; total_amount: number }>;
  constructor(
    private store: Store<{
      carts: {
        carts: Cart[];
        total_amount: number;
      };
    }>
  ) {}
  ngOnInit(): void {
    this.cartsState = this.store.select('carts');
    this.cartsState.subscribe((item) => {
      this.total_amount = item.total_amount;
      this.shipping_fee = this.total_amount * 0.1;
      this.order_total = this.total_amount + this.total_amount * 0.1;
    });
  }
}
