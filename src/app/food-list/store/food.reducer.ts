import data from '../../data';
import { Food } from '../Food.model';
import * as FoodActions from './food.action';

export interface State {
  filtered_foods: Food[];
  all_foods: Food[];
  filters: {
    text: string;
    type: string;
  };
  amount: number;
}

const initialState: State = {
  filtered_foods: [],
  all_foods: data,
  filters: {
    text: '',
    type: 'All',
  },
  amount: 1,
};

export function FoodReducer(
  state: State = initialState,
  action: FoodActions.FoodActions
) {
  switch (action.type) {
    case FoodActions.UPDATE_FILTERS: {
      return { ...state, filters: { ...state.filters, type: action.payload } };
    }

    case FoodActions.UPDATE_SEARCH: {
      console.log(action.payload);
      return { ...state, filters: { ...state.filters, text: action.payload } };
    }

    case FoodActions.FILTERED_FOODS: {
      const { all_foods } = state;

      const { text, type } = state.filters;

      let tempFoods = [...all_foods];

      if (text) {
        tempFoods = tempFoods.filter((item) => {
          return item.name.toLowerCase().includes(text);
        });
      }

      if (type !== 'All') {
        tempFoods = tempFoods.filter((item) => {
          return item.type.includes(type);
        });
      }

      console.log('2' + type);
      return { ...state, filtered_foods: tempFoods };
    }

    case FoodActions.UPDATE_FOODS: {
      return { ...state, all_foods: action.payload };
    }

    default:
      return state;
      break;
  }
}
