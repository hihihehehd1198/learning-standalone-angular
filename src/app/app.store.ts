import { createAction, props } from '@ngrx/store/src/action_creator';
import { createReducer, on } from '@ngrx/store/src/reducer_creator';

const GET_LIST_DATA_ACTION = 'GET LIST DATA ACTION';
const GET_LIST_DATA_ACTION_SUCCESS = 'GET LIST DATA ACTION SUCCESS';
const GET_LIST_DATA_ACTION_FAILURE = 'GET LIST DATA ACTION FAILURE';

//action
export const getListDataAction = createAction(GET_LIST_DATA_ACTION);
export const getListDataActionSuccess = createAction(
  GET_LIST_DATA_ACTION_SUCCESS,
  props<{ data: any }>()
);
export const getListDataActionFailure = createAction(
  GET_LIST_DATA_ACTION_FAILURE
);
enum CorsBoolean {
  YES = 'yes',
  NO = 'no',
}

export interface itemType {
  API: string;
  Auth: string;
  Category: string;
  Cors: string;
  Description: string;
  HTTPS: boolean;
  Link: string;
}
export interface listDataState {
  count: number;
  loading: boolean;
  entries: Partial<itemType>[];
}
const initialState: listDataState = {
  count: 0,
  loading: false,
  entries: [],
};

//reducer
const AppReducer = createReducer(
  initialState,
  on(getListDataAction, (state: listDataState) => ({
    ...state,
    loading: true,
  })),
  on(getListDataActionSuccess, (state: listDataState, action: any) => ({
    loading: false,
    count: 0,
    entries: [],
  })),
  on(getListDataActionFailure, (state: listDataState) => ({
    ...state,
    loading: false,
  }))
);

//export reducer
export function reducer(state: any, action: any) {
  return AppReducer(state, action);
}
