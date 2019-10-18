import * as React from 'react';
import * as styles from './AddRecipeForm.scss';
import cn from 'classnames';
import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase';
import FormField from '../FormField';
import { Field } from 'redux-form';
import { Translate } from 'react-localize-redux';
import { UPLOAD_STATUS_TYPE } from '../../constants/common';
import {
    required,
    maxNameValue,
    maxRecipeValue,
} from '../../helpers/validators';

interface IProps {
    handleSubmit: () => void;
    updateFileUploaderStatus: (data: any, type: UPLOAD_STATUS_TYPE) => void;
    urlToImage: string;
    isUploading: boolean;
}

const AddRecipeForm = (props: IProps) => {
    const {
        handleSubmit,
        updateFileUploaderStatus,
        urlToImage,
        isUploading,
    } = props;

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.formWrapper}
        >
        <div>
            <Field
                name='title'
                type='text'
                label='addRecipe.titleField'
                component={FormField}
                validate={[required, maxNameValue]}
            />
        </div>
        <div>
            <Field
                name='recipe'
                type='textarea'
                label='addRecipe.recipeField'
                component={FormField}
                validate={[required, maxRecipeValue]}
            />
        </div>
        <div className={styles.fileBox}>
            <div className='file is-boxed'>
                <label className='file-label'>
                    <FileUploader
                        accept='image/*'
                        name='recipeImage'
                        randomizeFilename
                        storageRef={firebase.storage().ref('images')}
                        onUploadStart={(data: any) => updateFileUploaderStatus(data, UPLOAD_STATUS_TYPE.START)}
                        onUploadError={(data: any) => updateFileUploaderStatus(data, UPLOAD_STATUS_TYPE.ERROR)}
                        onUploadSuccess={(data: any) => updateFileUploaderStatus(data, UPLOAD_STATUS_TYPE.SUCCESSS)}
                        onProgress={(data: any) => updateFileUploaderStatus(data, UPLOAD_STATUS_TYPE.PROGRESS)}
                    />
                    <span className='file-cta'>
                    <span className='file-icon'>
                        <i className='fas fa-upload'></i>
                    </span>
                    <span className='file-label'>
                        <Translate id='addRecipe.chooseFile' />
                    </span>
                    </span>
                </label>
            </div>
            {urlToImage && <img src={urlToImage} />}
        </div>
        <button
            className={cn('button is-success', isUploading && 'is-loading')}
            type='submit'
            disabled={isUploading}
        >
            <Translate id='addRecipe.submit' />
        </button>
    </form>
    );
};

export default React.memo(AddRecipeForm);
