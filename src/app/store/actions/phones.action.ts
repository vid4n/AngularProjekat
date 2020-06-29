import Phone from 'src/app/models/phone.model';
import { createAction, props } from '@ngrx/store';

export const savePhones = createAction(
  '[shops component] save phones in store',
  props<{ phones: Phone[] }>()
);