import { Action } from '@ngrx/store';
import { Food } from '../Food.model';

export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const FILTERED_FOODS = 'FILTERED_FOODS';
export const UPDATE_FOODS = 'UPDATE_FOODS';

export class updateFilters implements Action {
  readonly type = UPDATE_FILTERS;
  constructor(public payload: string) {}
}

export class filteredFoods implements Action {
  readonly type = FILTERED_FOODS;
}

export class updateFoods implements Action {
  readonly type = UPDATE_FOODS;
  constructor(public payload: Food[]) {}
}

export type FoodActions = filteredFoods | updateFilters | updateFoods;
