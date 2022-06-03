import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import * as FoodActions from '../food-list/store/food.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // f: NgForm;
  text: string = '';

  constructor(
    private store: Store<{
      foods: {
        filters: {
          text: string;
          type: string;
        };
      };
    }>
  ) {}

  ngOnInit(): void {}

  updateSearch() {
    this.store.dispatch(new FoodActions.updateSearch(this.text));
    this.store.dispatch(new FoodActions.filteredFoods());
  }
}
