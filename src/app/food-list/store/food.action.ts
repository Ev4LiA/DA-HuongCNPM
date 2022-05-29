import { Action } from '@ngrx/store';

export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const FILTERED_FOODS = 'FILTERED_FOODS';

export class updateFilters implements Action {
  readonly type = UPDATE_FILTERS;
  constructor(public payload: string) {}
}

export class filteredFoods implements Action {
  readonly type = FILTERED_FOODS;
}

export type FoodActions = filteredFoods | updateFilters;
