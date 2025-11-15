import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';

const filterAdapter = createEntityAdapter();

// const initialState = {
//   filters: [],
//   filtersLoadingStatus: 'idle',
//   activeFilter: 'all',
// };

const initialState = filterAdapter.getInitialState({
  filtersLoadingStatus: 'idle',
  activeFilter: 'all',
});

export const fetchFilters = createAsyncThunk('filters/fetchFilters', async request => {
  return await request('http://localhost:3001/filters');
});

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    // filtersFetching: state => {
    //   state.filtersLoadingStatus = 'loading';
    // },
    // filtersFetched: (state, action) => {
    //   state.filters = action.payload;
    //   state.filtersLoadingStatus = 'idle';
    // },
    // filtersFetchingError: state => {
    //   state.filtersLoadingStatus = 'error';
    // },
    filtersChanged: (state, action) => {
      state.activeFilter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchFilters.pending, state => {
        state.filtersLoadingStatus = 'loading';
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.filtersLoadingStatus = 'idle';
        filterAdapter.setAll(state, action.payload);
      })
      .addCase(fetchFilters.rejected, state => {
        state.filtersLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

const {actions, reducer} = filtersSlice;

export default reducer;
export const {selectAll} = filterAdapter.getSelectors(state => state.filters);
export const {filtersFetching, filtersFetched, filtersFetchingError, filtersChanged} = actions;
