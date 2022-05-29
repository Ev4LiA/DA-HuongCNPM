import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Food } from './Food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  foodsState: Observable<{
    filtered_foods: Food[];
    all_foods: Food[];
    filters: {
      text: string;
      type: string;
    };
  }>;

  visible: boolean = false;
  foodChose: Food;

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
    this.foodsState = this.store.select('foods');
  }

  onToggleOverlay(food: Food) {
    this.visible = !this.visible;
    this.foodChose = food;
  }
}
