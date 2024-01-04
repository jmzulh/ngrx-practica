import { ItemState } from "@core/models/item.state";
import { ActionReducerMap } from "@ngrx/store";
import { itemsReducer } from "./reducers/items.reducer";

export interface AppState{
    items : ItemState,
}

export const ROOT_REDUCER : ActionReducerMap<AppState> = {
    items:itemsReducer
}