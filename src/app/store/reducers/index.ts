import { CartState } from './cart.reducer';
import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { PhonesState } from './phones.reducer';

export const getCartState = createFeatureSelector('cart');
export const getPhonesState = createFeatureSelector('phones');

export const getCartPhones = createSelector(
  getCartState,
  (cartState: CartState) => cartState.entities
);

export const getPhones = createSelector(
  getPhonesState,
  (phonesState: PhonesState) => phonesState.entities
);