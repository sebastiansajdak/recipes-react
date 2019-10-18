import * as React from 'react';
import * as styles from './AddRecipe.scss';
import AddRecipeForm from '../../components/AddRecipeForm';
import cn from 'classnames';
import firebase from 'firebase';
import ILang from '../../types/lang';
import {
    DATABASE_NAME,
    UPLOAD_STATUS_TYPE,
} from '../../constants/common';
import { Translate } from 'react-localize-redux';

interface IProps {
    urlToImage: string;
    activeLanguage: {
        code: ILang;
    };
    isUploading: boolean;
    updateFileUploaderStatus: (data: any, type: UPLOAD_STATUS_TYPE) => void;
    clearData: () => void;
    history: any;
}

class AddRecipe extends React.Component<IProps> {

    submit = async (values: any) => {
        const {
            urlToImage,
            activeLanguage: {
                code,
            },
            history,
        } = this.props;

        const data = {
            created: new Date(),
            title: values.title,
            description: values.recipe,
            image: urlToImage,
            lang: code,
            likes: 0,
            views: 0,
        };

        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true,
        });

        const response = await db.collection(DATABASE_NAME).add(data);
        if (response.id) {
            history.push('/recipes');
        }
    }

    componentWillUnmount() {
        const { clearData } = this.props;
        clearData();
    }

    render() {
        const {
            updateFileUploaderStatus,
            urlToImage,
            isUploading,
        } = this.props;

        return <section className={cn('container', styles.addRecipeWrapper)}>
            <h1 className='title'>
                <Translate id='addRecipe.title' />
            </h1>
            <AddRecipeForm
                onSubmit={this.submit}
                urlToImage={urlToImage}
                updateFileUploaderStatus={updateFileUploaderStatus}
                isUploading={isUploading}
            />
        </section>;
    }
}

export default AddRecipe;
