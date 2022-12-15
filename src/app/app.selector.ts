import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store/src/selector';
import { listDataState } from './app.store';

export interface AppState {
  listUrlState: Partial<listDataState>;
}
const appState: AppState = {
  listUrlState: {},
};

export const dataFeature = (state: AppState) => state.listUrlState;

export const appSelector = createFeatureSelector<listDataState>('listUrlState');
