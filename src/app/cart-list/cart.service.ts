import { Injectable } from '@angular/core';
import { Food } from '../food-list/Food.model';
import { Cart } from './cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carts: Cart[] = [];
  constructor() {}

  getCart() {
    return this.carts;
  }

  toggleAmount(id: string, value: number) {}

  clearCart() {}

  removeItem(id: string) {}

  addToCart(foodId: string, amount: number, food: Food) {}
}
