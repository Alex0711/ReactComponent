import { createStructuredSelector } from 'reselect';

export const NAME = 'cart';

// Action Types
const ADD_TO_CART = '[cart]/ADD_TO_CART';
const REMOVE_FROM_CART = '[cart]/REMOVE_FROM_CART';

// Initial State:
const initialState = {
  products: [],
};

// REDUCER:
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, products: [...state.products, action.product] };
    case REMOVE_FROM_CART:
      const newProducts = state.products.filter(
        (product) => product.id !== action.product.id
      );
      return { ...state, products: newProducts };
    default:
      return state;
  }
}

function addToCart(product) {
  return { type: ADD_TO_CART, product };
}
function removeFromCart(product) {
  return { type: REMOVE_FROM_CART, product };
}

const cart = (state) => state[NAME];

export const selector = createStructuredSelector({
  cart,
});

export const actionCreators = {
  addToCart,
  removeFromCart,
};

export const actionTypes = {
  ADD_TO_CART,
  REMOVE_FROM_CART,
};