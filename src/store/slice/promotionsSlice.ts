import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { getPromotionsList } from '../actions/promotionsActions';
import { Promotions, PromotionsState } from '../../models/slice/sliceTypes';

const initialState: PromotionsState = {
  promotions: [],
  pending: false,
  error: {},
};

const promotionsSlice = createSlice({
  name: 'promotions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPromotionsList.pending, state => {
        state.pending = true;
      })
      .addCase(getPromotionsList.fulfilled, (state, action: PayloadAction<Promotions[]>) => {
        state.pending = false;
        state.promotions = action.payload;
      })
      .addCase(getPromotionsList.rejected, (state, action) => {
        state.error = action.payload ?? 'Bilinmeyen Hata :(';
        state.pending = false;
      });
  },
});

export default promotionsSlice.reducer;
