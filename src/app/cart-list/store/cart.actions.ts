import { Action } from '@ngrx/store';
import { Food } from 'src/app/food-list/Food.model';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const TOGGLE_CART_ITEM_AMOUNT = 'TOGGLE_CART_ITEM_AMOUNT';
export const CLEAR_CART = 'CLEAR_CART';
export const COUNT_CART_TOTALS = 'COUNT_CART_TOTALS';

export class addToCart implements Action {
  readonly type = ADD_TO_CART;
  constructor(public payload: { food: Food; amount: number }) {}
}

export class removeCartItem implements Action {
  readonly type = REMOVE_CART_ITEM;
  constructor(public payload: string) {}
}

export class toggleCartItemAmount implements Action {
  readonly type = TOGGLE_CART_ITEM_AMOUNT;
  // value: {inc, dec}
  constructor(public payload: { id: string; value: string }) {}
}
export class clearCart implements Action {
  readonly type = CLEAR_CART;
}
export class countCartTotals implements Action {
  readonly type = COUNT_CART_TOTALS;
}

export type CartActions =
  | addToCart
  | removeCartItem
  | toggleCartItemAmount
  | clearCart
  | countCartTotals;
