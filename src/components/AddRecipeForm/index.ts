import AddRecipeForm from './AddRecipeForm';
import { reduxForm } from 'redux-form';

export default reduxForm({
    form: 'addRecipeForm',
})(AddRecipeForm as any) as any;
