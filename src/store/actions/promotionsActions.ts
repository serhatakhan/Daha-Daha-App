import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/request';
import {PROMOTIONS_LIST_URL} from '../../service/urls';
import { Promotions } from '../../models/slice/sliceTypes';

const getPromotionsList = createAsyncThunk<Promotions[], void, {rejectValue: string}>(
  'promotions/getPromotionsList',
  async (_, {rejectWithValue}) => {
    try {
      const res = await getRequest<Promotions[]>(PROMOTIONS_LIST_URL, {});
      return res.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export {getPromotionsList};
