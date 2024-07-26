import {configureStore} from '@reduxjs/toolkit';
import tagListReducer from './slice/tagListSlice';
import promotionsReducer from './slice/promotionsSlice';
import singlePromotionReducer from './slice/singlePromotionSlice';

export const store = configureStore({
  reducer: {
    tagList: tagListReducer,
    promotions: promotionsReducer,
    singlePromotion: singlePromotionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
