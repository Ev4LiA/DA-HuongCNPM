import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Food } from '../Food.model';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css'],
})
export class FoodItemComponent implements OnInit {
  @Input() food: Food;
  @Output() open: EventEmitter<Food> = new EventEmitter<Food>();

  constructor() {}

  ngOnInit(): void {}

  onOpen() {
    this.open.emit(this.food);
  }
}
