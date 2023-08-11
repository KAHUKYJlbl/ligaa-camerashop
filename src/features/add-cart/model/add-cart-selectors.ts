import { NameSpace, State } from '../../../app/provider/store';
import { RatedCamera } from '../../../entities/camera';

export const getAddCartShown = (state: State): boolean => state[NameSpace.AddCart].isAddCartShown;

export const getCurrentCamera = (state: State): RatedCamera | null => state[NameSpace.AddCart].currentCamera;
