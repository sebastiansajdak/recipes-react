import imageUploadReducer from './imageUpload';
import recipesReducer from './recipes';
import { reducer as recipeFormReducer } from 'redux-form';
import {
    combineReducers,
    Reducer,
} from 'redux';

const reducers: Reducer<object> = combineReducers({
    imageUpload: imageUploadReducer,
    form: recipeFormReducer,
    recipes: recipesReducer,
});

export default reducers;
