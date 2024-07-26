import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/request';
import {LIST_URL} from '../../service/urls';
import { TagList } from '../../models/slice/sliceTypes';

const getTagList = createAsyncThunk<TagList[], void, {rejectValue: string}>(
  'tagList/getTagList',
  async (_, {rejectWithValue}) => {
    try {
      const res = await getRequest<TagList[]>(`${LIST_URL}`, {});
      return res.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export {getTagList};
