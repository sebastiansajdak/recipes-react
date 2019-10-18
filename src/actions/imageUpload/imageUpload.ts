import firebase from 'firebase';
import { UPLOAD_STATUS_TYPE } from '../../constants/common';
import {
    CLEAR_DATA_IMG,
    UPLOAD_STATUSES,
} from '../../constants/actionTypes';

export const updateFileUploaderStatus = (data: any, type: UPLOAD_STATUS_TYPE) => async (dispatch: any) => {
    let uploadData = data;
    if (type === UPLOAD_STATUS_TYPE.SUCCESSS) {
        uploadData = await firebase
            .storage()
            .ref('images')
            .child(data)
            .getDownloadURL();
    }

    dispatch({
        type: UPLOAD_STATUSES[type],
        payload: {
            data: uploadData,
        },
    });
};

export const clearData = () => ({
    type: CLEAR_DATA_IMG,
    payload: {},
});
