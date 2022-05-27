import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../cart.model';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import * as CartActions from '../store/cart.actions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  faPlus = faPlus;
  faMinus = faMinus;

  @Input() cart: Cart;

  constructor(
    private store: Store<{ carts: { carts: Cart[]; total_amount: number } }>
  ) {}

  ngOnInit(): void {}

  onPlus() {
    this.store.dispatch(
      new CartActions.toggleCartItemAmount({ id: this.cart.id, value: 'inc' })
    );
  }
  onMinus() {
    this.store.dispatch(
      new CartActions.toggleCartItemAmount({ id: this.cart.id, value: 'dec' })
    );
  }
}
