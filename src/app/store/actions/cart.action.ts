import Phone from 'src/app/models/phone.model';
import { createAction, props } from '@ngrx/store';

export const addToCart = createAction(
  '[phones component] add phone to cart',
  props<{ phone: Phone }>()
);

export const removeAllFromCart = createAction(
  '[cart component, phones component]'
);

export const removePhoneFromCart = createAction(
  '[cart component]',
  props<{ id: number }>()
);
