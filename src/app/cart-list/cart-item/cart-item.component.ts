import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../cart.model';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
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
  faTrash = faTrash;
  hiddenMinus: boolean = true;

  @Input() cart: Cart;

  constructor(
    private store: Store<{
      carts: { carts: Cart[]; total_amount: number; total_item: number };
    }>
  ) {}

  ngOnInit(): void {}

  onPlus() {
    // this.store
    //   .select('carts')
    //   .subscribe(({ carts }) => {
    //     let itemCart = carts.filter((cart) => cart.id === this.cart.id);
    //     this.hiddenMinus = itemCart[0].amount === 1 ? true : false;
    //   })
    //   .unsubscribe();
    this.store.dispatch(
      new CartActions.toggleCartItemAmount({ id: this.cart.id, value: 'inc' })
    );
    this.store.dispatch(new CartActions.countCartTotals());
  }
  onMinus() {
    // this.store
    //   .select('carts')
    //   .subscribe(({ carts }) => {
    //     let itemCart = carts.filter((cart) => cart.id === this.cart.id);
    //     this.hiddenMinus = itemCart[0].amount === 1 ? true : false;
    //   })
    //   .unsubscribe();
    this.store.dispatch(
      new CartActions.toggleCartItemAmount({ id: this.cart.id, value: 'dec' })
    );
    this.store.dispatch(new CartActions.countCartTotals());
  }

  onRemove() {
    this.store.dispatch(new CartActions.removeCartItem(this.cart.id));
    this.store.dispatch(new CartActions.countCartTotals());
  }
}
