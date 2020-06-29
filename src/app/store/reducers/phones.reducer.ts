import { savePhones } from './../actions/phones.action';
import Phone from 'src/app/models/phone.model';
import { createReducer, on, Action } from '@ngrx/store';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

const adapter: EntityAdapter<Phone> = createEntityAdapter<Phone>();

export interface PhonesState extends EntityState<Phone> {
  ids: number[];
  entities: { [id: number]: Phone };
}

export const initialState: PhonesState = adapter.getInitialState({
  ids: [],
  entities: [],
});

const reducer = createReducer(
  initialState,
  on(savePhones, (state, { phones }) => {
    return adapter.addAll(phones, state);
  })
);

export function phonesReducer(state: PhonesState, action: Action) {
  return reducer(state, action);
}