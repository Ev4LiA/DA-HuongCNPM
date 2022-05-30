import { newArray } from '@angular/compiler/src/util';
import { Cart } from '../cart.model';
import * as CartActions from './cart.actions';

export interface State {
  carts: Cart[];
  total_amount: number;
}

const initialState: State = {
  carts: [
    {
      id: 'FOOD0',
      name: ' Skillet Chicken and Mushroom Wine Sauce ',
      price: 750000,
      image:
        'https://www.savingdessert.com/wp-content/uploads/2015/10/Skillet-Chicken-and-Mushroom-Wine-Sauce-4-500x500.jpg',
      amount: 1,
    },
  ],
  total_amount: 0,
};

export function CartReducer(
  state: State = initialState,
  action: CartActions.CartActions
) {
  switch (action.type) {
    case CartActions.ADD_TO_CART:
      {
        const { food, amount } = action.payload;
        const { id, name, image, price } = food;
        const tempFood = state.carts.find((f) => f.id === id);
        console.log(state.carts);
        console.log(id, amount, image, food);

        if (tempFood) {
          const tempCarts = state.carts.map((item) => {
            if (item.id === id) {
              let newAmount = item.amount + amount;
              return { ...item, amount: newAmount };
            } else {
              return item;
            }
          });

          return { ...state, carts: tempCarts };
        } else {
          const newItem: Cart = {
            id,
            name,
            image,
            amount,
            price,
          };

          return { ...state, carts: [...state.carts, newItem] };
        }
      }
      break;
    case CartActions.REMOVE_CART_ITEM:
      {
        let tempCart = state.carts.filter((item) => item.id !== action.payload);
        return { ...state, carts: tempCart };
      }
      break;
    case CartActions.TOGGLE_CART_ITEM_AMOUNT:
      {
        let { id, value } = action.payload;

        let tempCart = state.carts.map((item) => {
          if (item.id === id) {
            if (value === 'inc') {
              let newAmount = item.amount + 1;
              return { ...item, amount: newAmount };
            }

            if (value === 'dec') {
              let newAmount = item.amount - 1;
              if (newAmount < 1) {
                newAmount = 1;
              }
              return { ...item, amount: newAmount };
            }
          } else {
            return item;
          }
        });

        return { ...state, carts: tempCart };
      }
      break;

    case CartActions.CLEAR_CART: {
      return { ...state, carts: [] };
    }

    case CartActions.COUNT_CART_TOTALS: {
      const total_amount = state.carts.reduce((total, item) => {
        const { amount, price } = item;
        total += amount * price;
        return total;
      }, 0);

      return { ...state, total_amount };
    }

    default:
      return state;
      break;
  }
}
