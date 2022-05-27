import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Cart } from './cart.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  cartsState: Observable<{ carts: Cart[]; total_amount: number }>;
  private subscription: Subscription;

  constructor(
    private store: Store<{ carts: { carts: Cart[]; total_amount: number } }>
  ) {}

  ngOnInit(): void {
    this.cartsState = this.store.select('carts');
  }
}
