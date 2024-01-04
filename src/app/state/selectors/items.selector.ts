import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ItemState } from '@core/models/item.state';
 
 
export const selectItemsFeature = (state: AppState) => state.items;
 
export const selectListItems = createSelector(
    selectItemsFeature,
  (state: ItemState) => state.items
);

export const selectLoading = createSelector(
    selectItemsFeature,
  (state: ItemState) => state.loading
);