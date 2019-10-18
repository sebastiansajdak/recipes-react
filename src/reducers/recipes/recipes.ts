import typeToReducer from 'type-to-reducer';
import { IStore } from '../../types';
import {
    UPLOAD_STATUS_TYPE,
} from '../../constants/common';
import {
    GET_RECIPES,
    GET_RECIPE,
    CLEAR_DATA_RECIPE,
    CLEAR_DATA_RECIPES,
} from '../../constants/actionTypes';

type IState = IStore['recipes'];

export const initialState: IState = {
    items: [],
    item: null,
    lastVisible: null,
};

export default typeToReducer({
    [GET_RECIPES]: (state, action): IState => ({
        ...state,
        items: action.payload.data.recipes,
        lastVisible: action.payload.data.lastVisible,
    }),
    [GET_RECIPE]: (state, action): IState => ({
        ...state,
        item: action.payload.data.recipe,
    }),
    [CLEAR_DATA_RECIPE]: (state): IState => ({
        ...state,
        item: initialState.item,
    }),
    [CLEAR_DATA_RECIPES]: (state): IState => ({
        ...state,
        items: initialState.items,
    }),
}, initialState);
