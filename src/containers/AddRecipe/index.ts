import AddRecipe from './AddRecipe';
import { connect } from 'react-redux';
import { IStore } from '../../types';
import { withLocalize } from 'react-localize-redux';
import {
    updateFileUploaderStatus,
    clearData,
} from '../../actions/imageUpload';

const mapStatetoProps = ({ imageUpload }: IStore) => ({
    urlToImage: imageUpload.url,
    isUploading: imageUpload.isUploading,
});

const mapDispatchToProps = {
    updateFileUploaderStatus,
    clearData,
};

export default connect(
    mapStatetoProps,
    mapDispatchToProps,
)(withLocalize(AddRecipe as any) as any);
