import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../../app/provider/store';
import { Camera } from '../../../entities/camera';

type InitialState = {
  isAddBasketShown: boolean;
  currentCamera: Camera | null;
}

const initialState: InitialState = {
  isAddBasketShown: false,
  currentCamera: null
};

export const addBasketSlice = createSlice({
  name: NameSpace.AddBasket,
  initialState,
  reducers: {
    showAddBasket: (state, action: PayloadAction<Camera>) => {
      state.isAddBasketShown = true;
      state.currentCamera = action.payload;
    },
    hideAddBasket: (state) => {
      state.isAddBasketShown = false;
      state.currentCamera = null;
    },
  },
});

export const { showAddBasket, hideAddBasket } = addBasketSlice.actions;
