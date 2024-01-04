import { ItemModel } from '@core/models/Item.interface';
import { createReducer, on } from '@ngrx/store';
import { loadItems, loadedItems } from '../actions/items.actions';
import { ItemState } from '@core/models/item.state';


export const initialState : ItemState = {loading:false, items: []};

export const itemsReducer = createReducer(
  initialState,
  on(loadItems, (state) => {
    return {...state, loading:true};
  }),
  on(loadedItems, (state, {items}) => {
    return {...state, loading:false, items};
  }),
);