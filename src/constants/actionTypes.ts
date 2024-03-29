import { UPLOAD_STATUS_TYPE } from './common';

// action types
export const UPLOAD_STATUSES = {
    [UPLOAD_STATUS_TYPE.START]: 'UPLOAD_STATUS_START',
    [UPLOAD_STATUS_TYPE.PROGRESS]: 'UPLOAD_STATUS_PROGRESS',
    [UPLOAD_STATUS_TYPE.SUCCESSS]: 'UPLOAD_STATUS_SUCCESSS',
    [UPLOAD_STATUS_TYPE.ERROR]: 'UPLOAD_STATUS_ERROR',
};

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPE = 'GET_RECIPE';
export const CLEAR_DATA_RECIPE = 'CLEAR_DATA_RECIPE';
export const CLEAR_DATA_RECIPES = 'CLEAR_DATA_RECIPES';

export const CLEAR_DATA_IMG = 'CLEAR_DATA_IMG';
