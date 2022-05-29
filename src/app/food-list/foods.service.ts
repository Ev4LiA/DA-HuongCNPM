import { Injectable } from '@angular/core';
import { Food } from './Food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  private foods: Food[] = [
    {
      id: '1',
      name: 'pho',
      type: 'Meal',
      price: 20,
    },
    {
      id: '2',
      name: 'bun',
      type: 'Meal',
      price: 20,
    },
    {
      id: '3',
      name: 'com',
      type: 'Meal',
      price: 20,
    },
    {
      id: '4',
      name: 'Cappuchino',
      type: 'Coffee',
      price: 20,
    },
    {
      id: '5',
      name: 'Expresso',
      type: 'Coffee',
      price: 20,
    },
    {
      id: '6',
      name: 'kem',
      type: 'Dessert',
      price: 20,
    },
  ];

  constructor() {}

  getFoods() {
    return this.foods.slice();
  }

  getFoodsFilter(type: string) {
    this.foods = this.foods.filter((item) => item.type === type).slice();
  }
}
