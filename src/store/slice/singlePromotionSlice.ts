import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getPromotionById} from '../actions/singlePromotionsActions';
import {Promotion, PromotionState} from '../../models/slice/sliceTypes';

const initialState: PromotionState = {
  promotion: null,
  loading: false,
  error: null,
};

const singlePromotionSlice = createSlice({
  name: 'singlePromotion',
  initialState,
  reducers: {
    removePromotion: state => {
      state.promotion = null; // Clear promotion data
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPromotionById.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getPromotionById.fulfilled,
        (state, action: PayloadAction<Promotion>) => {
          state.loading = false;
          state.promotion = action.payload;
        },
      )
      .addCase(getPromotionById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'An error occurred';
      });
  },
});

export const {removePromotion} = singlePromotionSlice.actions;
export default singlePromotionSlice.reducer;
