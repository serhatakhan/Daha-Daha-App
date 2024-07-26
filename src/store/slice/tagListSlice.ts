import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {getTagList} from '../actions/tagListActions';
import { TagList, TagListState } from '../../models/slice/sliceTypes';

// initial state'e tagların başlangıç durumunu tanımla
const initialState: TagListState = {
  tagList: [],
  pending: false,
  error: {},
};

const tagListSlice = createSlice({
  name: 'tagList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTagList.pending, state => {
        state.pending = true;
      })
      .addCase(
        getTagList.fulfilled,
        (state, action: PayloadAction<TagList[]>) => {
          state.tagList = action.payload;
          state.pending = false;
        },
      )
      .addCase(getTagList.rejected, (state, action) => {
        state.error = action.payload ?? 'Bilinmeyen Hata :(';
        state.pending = false;
      });
  },
});

export default tagListSlice.reducer;
