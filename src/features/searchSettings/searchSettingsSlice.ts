import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SearchSettingsState {
  page: number;
  limit: number;
  sortBy: string;
  search: string;
  order: 1 | -1;
}

const initialState: SearchSettingsState = {
  page: 1,
  limit: 12,
  sortBy: 'pubDate',
  search: '',
  order: 1,
};

export const searchSettingsSlice = createSlice({
  name: 'searchSettings',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    changeOrder: (state) => {
      state.order = state.order === 1 ? -1 : 1;
    },
  },
});

export const { setPage, setSearch, setSortBy, changeOrder } =
  searchSettingsSlice.actions;

export default searchSettingsSlice.reducer;
