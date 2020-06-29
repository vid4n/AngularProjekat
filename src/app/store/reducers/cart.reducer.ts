import {
    removeAllFromCart,
    removePhoneFromCart,
  } from './../actions/cart.action';
  import Phone from 'src/app/models/phone.model';
  import { createReducer, on, Action } from '@ngrx/store';
  import { addToCart } from '../actions/cart.action';
  import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
  
  const adapter: EntityAdapter<Phone> = createEntityAdapter<Phone>();
  
  export interface CartState extends EntityState<Phone> {
    ids: number[];
    entities: { [id: number]: Phone };
  }
  
  export const initialState: CartState = adapter.getInitialState({
    ids: [],
    entities: [],
  });
  
  const reducer = createReducer(
    initialState,
    on(addToCart, (state, { phone }) => {
      return adapter.addOne(phone, state);
    }),
    on(removeAllFromCart, (state) => {
      return adapter.removeAll(state);
    }),
    on(removePhoneFromCart, (state, { id }) => {
      return adapter.removeOne(id, state);
    })
  );
  
  export function cartReducer(state: CartState, action: Action) {
    return reducer(state, action);
  }
  