import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/request';
import {PROMOTIONS_URL} from '../../service/urls';
import {Promotion} from '../../models/slice/sliceTypes';

const getPromotionById = createAsyncThunk<
  Promotion,
  number,
  {rejectValue: string}
>('singlePromotion/getPromotionById', async (id: number, {rejectWithValue}) => {
  try {
    const res = await getRequest<Promotion>(`${PROMOTIONS_URL}?Id=${id}`, {});
    return res.data;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export {getPromotionById};
