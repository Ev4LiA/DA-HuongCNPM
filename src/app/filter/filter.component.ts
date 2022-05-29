import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Food } from '../food-list/Food.model';
import * as FoodsAction from '../food-list/store/food.action';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  foodTypes: string[] = [
    'All',
    'Coffee',
    'Tea',
    'Juice',
    'Meal',
    'Snack',
    'Dessert',
  ];

  selectedType?: string = 'All';

  foodsState: Observable<{
    filtered_foods: Food[];
    all_foods: Food[];
    filters: {
      text: string;
      type: string;
    };
  }>;

  constructor(
    private store: Store<{
      foods: {
        filtered_foods: Food[];
        all_foods: Food[];
        filters: {
          text: string;
          type: string;
        };
      };
    }>
  ) {}

  ngOnInit(): void {
    this.onOpenTab('All');
  }

  onOpenTab(type: string) {
    this.selectedType = type;
    this.store.dispatch(new FoodsAction.updateFilters(type));
    this.store.dispatch(new FoodsAction.filteredFoods());
  }
}
