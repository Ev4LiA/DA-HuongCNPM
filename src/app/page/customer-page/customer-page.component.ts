import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Food } from 'src/app/food-list/Food.model';
import * as FoodActions from '../../food-list/store/food.action'
import GetFoodApi from './foodapi';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {

  foodsState: Observable<{
    foods: {
      filtered_foods: Food[];
      all_foods: Food[];
      filters: {
        text: string;
        type: string;
      };
    };
  }>

  foodList: Food[]= []

  constructor(private store: Store<{
    foods: {
      filtered_foods: Food[];
      all_foods: Food[];
      filters: {
        text: string;
        type: string;
      };
    };
  }>) { }

 async getfood() {
   const res = await GetFoodApi();
  this.foodList = res.data;
  console.log(res.data)
  this.store.dispatch(new FoodActions.updateFoods(this.foodList))
 }

   ngOnInit(): void {
    console.log("fetchng")
    this.getfood();
    
  }

}
