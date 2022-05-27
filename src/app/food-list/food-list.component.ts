import { Component, OnInit } from '@angular/core';
import { Food } from './Food.model';
import { FoodsService } from './foods.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  foods: Food[] = [];
  visible: boolean = false;
  foodChose: Food;

  constructor(private foodsService: FoodsService) {}

  ngOnInit(): void {
    this.foods = this.foodsService.getFoods();
  }

  onToggleOverlay(food: Food) {
    this.visible = !this.visible;
    this.foodChose = food;
  }
}
