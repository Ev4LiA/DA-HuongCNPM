import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Cart } from './cart.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  cartsState: Observable<{ carts: Cart[]; total_amount: number }>;

  constructor(
    private store: Store<{ carts: { carts: Cart[]; total_amount: number } }>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartsState = this.store.select('carts');
  }

  onCheckout() {
    this.router.navigate(['/checkout']);
  }
}
