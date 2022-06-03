import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart } from './cart.model';
import SendCartApi from './send-cart-api';
import * as CartActions from './store/cart.actions';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  cartsState: Observable<{
    carts: Cart[];
    total_amount: number;
    total_item: number;
  }>;
  carts: Cart[];
  total_amount: number;
  total_item: number;
  constructor(
    private store: Store<{
      carts: { carts: Cart[]; total_amount: number; total_item: number };
    }>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartsState = this.store.select('carts');
  }

  onCheckout() {
    this.onSendCart();
    this.router.navigate(['/checkout']);
  }

  onSendCart() {
    // send cart info to server

    this.cartsState.subscribe(({ carts, total_amount, total_item }) => {
      this.carts = carts;
      this.total_amount = total_amount;
      this.total_item = total_item;
    });
    SendCartApi(this.carts);
    // Cart list is now stored in this.carts, same with total_amount (tong gia), total_item (tong so item)
  }

  onClearCart() {
    this.store.dispatch(new CartActions.clearCart());
    this.store.dispatch(new CartActions.countCartTotals());
  }
}
