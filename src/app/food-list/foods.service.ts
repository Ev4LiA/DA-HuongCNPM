import { Injectable } from '@angular/core';
import { Food } from './Food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  private Foods: Food[] = [
    {
      id: '1',
      name: 'pho',
      price: 20,
    },
    {
      id: '2',
      name: 'bun',
      price: 20,
    },
    {
      id: '3',
      name: 'com',
      price: 20,
    },
    {
      id: '4',
      name: 'bun bo',
      price: 20,
    },
    {
      id: '5',
      name: 'bun ca',
      price: 20,
    },
    {
      id: '6',
      name: 'kem',
      price: 20,
    },
  ];

  constructor() {}

  getFoods() {
    return this.Foods.slice();
  }
}
