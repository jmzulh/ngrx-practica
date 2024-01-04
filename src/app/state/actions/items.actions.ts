import { ItemModel } from '@core/models/Item.interface';
import { createAction, props } from '@ngrx/store';
 
export const loadItems = createAction(
    '[Item list] Load items',
);
 
export const loadedItems = createAction(
    '[Item list] Loaded success',
    props<{items:ItemModel[]}>()
);