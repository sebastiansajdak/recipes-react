import typeToReducer from 'type-to-reducer';
import { IStore } from '../../types';
import {
    UPLOAD_STATUS_TYPE,
} from '../../constants/common';
import {
    UPLOAD_STATUSES,
    CLEAR_DATA_IMG,
} from '../../constants/actionTypes';

type IState = IStore['imageUpload'];

export const initialState: IState = {
    isUploading: false,
    progress: 0,
    error: null,
    url: null,
};

export default typeToReducer({
    [UPLOAD_STATUSES[UPLOAD_STATUS_TYPE.START]]: (state): IState => ({
        ...state,
        isUploading: true,
    }),
    [UPLOAD_STATUSES[UPLOAD_STATUS_TYPE.PROGRESS]]: (state, { payload }): IState => ({
        ...state,
        progress: payload.data,
    }),
    [UPLOAD_STATUSES[UPLOAD_STATUS_TYPE.SUCCESSS]]: (state, { payload }): IState => ({
        ...state,
        isUploading: false,
        url: payload.data,
    }),
    [UPLOAD_STATUSES[UPLOAD_STATUS_TYPE.ERROR]]: (state, { payload }): IState => ({
        ...state,
        isUploading: false,
        error: payload.data,
    }),
    [CLEAR_DATA_IMG]: (): IState => ({
        ...initialState,
    }),
}, initialState);
