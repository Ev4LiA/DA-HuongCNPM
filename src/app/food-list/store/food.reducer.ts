import { Action } from '@ngrx/store';
import { Food } from '../Food.model';
import * as FoodActions from './food.action';

export interface State {
  filtered_foods: Food[];
  all_foods: Food[];
  filters: {
    text: string;
    type: string;
  };
}

const initialState: State = {
  filtered_foods: [],
  all_foods: [
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
  ],
  filters: {
    text: '',
    type: 'All',
  },
};

export function FoodReducer(
  state: State = initialState,
  action: FoodActions.FoodActions
) {
  switch (action.type) {
    case FoodActions.UPDATE_FILTERS: {
      return { ...state, filters: { ...state.filters, type: action.payload } };
    }

    case FoodActions.FILTERED_FOODS: {
      const { all_foods } = state;

      const { text, type } = state.filters;

      let tempFoods = [...all_foods];

      if (text) {
        tempFoods = tempFoods.filter((item) => {
          return item.name.toLowerCase().startsWith(text);
        });
      }

      if (type !== 'All') {
        tempFoods = tempFoods.filter((item) => {
          return item.type === type;
        });
      }

      console.log('2' + type);
      return { ...state, filtered_foods: tempFoods };
    }

    default:
      return state;
      break;
  }
}
