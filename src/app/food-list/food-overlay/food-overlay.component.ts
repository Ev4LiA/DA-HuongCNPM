import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { Observable } from 'rxjs';
import * as CartsActions from '../../cart-list/store/cart.actions';
import { Cart } from 'src/app/cart-list/cart.model';
import { Food } from '../Food.model';

@Component({
  selector: 'app-food-overlay',
  templateUrl: './food-overlay.component.html',
  styleUrls: ['./food-overlay.component.css'],
})
export class FoodOverlayComponent implements OnInit {
  // public amount = new BehaviorSubject<number>(1);

  faPlus = faPlus;
  faMinus = faMinus;

  cartsState: Observable<{ carts: Cart[]; amount: number }>;

  @Input() food: Food;
  @Output() close: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private store: Store<{ carts: { carts: Cart[]; amount: number } }>
  ) {}

  ngOnInit(): void {}

  onClose() {
    this.close.emit('');
  }

  itemAmount: number = 1;

  amount: number = 1;
  onToggle(value: string) {
    if (value === 'desc') {
      this.amount--;
      if (this.amount < 1) {
        this.amount = 1;
      }
    }

    if (value === 'inc') {
      this.amount++;
    }
  }

  onAddToCart() {
    this.onClose();
    this.store.dispatch(
      new CartsActions.addToCart({
        food: this.food,
        amount: this.amount,
      })
    );
    this.store.dispatch(new CartsActions.countCartTotals());
  }
}
