import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/cart-list/cart.model';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.css'],
})
export class CheckoutItemComponent implements OnInit {
  @Input() cart: Cart;
  total: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.total = this.cart.amount * this.cart.price;
  }
}
