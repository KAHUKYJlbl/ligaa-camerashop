import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';

import { Camera } from '../../../../entities/camera';
import { AppDispatch, State } from '../../../../app/provider/store';
import { toast } from 'react-toastify';
import { APIRoute } from '../../../../shared/lib/const/api-routes';
import { generatePath } from 'react-router-dom';

export const fetchCamera = createAsyncThunk<Camera, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'CameraInfo/fetchCamera',
  async (cameraId, {extra: axios}) => {
    try {
      const { data } = await axios.get<Camera>(generatePath( APIRoute.Camera, {cameraId}));

      return data;
    } catch (err) {
      if (err instanceof AxiosError && err.response?.status !== 401) {
        toast.error('Catalog loading failed.');
      }
      throw err;
    }
  },
);
