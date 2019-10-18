import IStore from '../../types/store';
import RecipePage from './RecipePage';
import {
    apiGetRecipeById,
    clearDataRecipe,
} from '../../actions/recipes';
import { connect } from 'react-redux';
import { withLocalize } from 'react-localize-redux';

const mapStatetoProps = ({ recipes }: IStore) => ({
    item: recipes.item,
});

const mapDispatchToProps = {
    clearDataRecipe,
    getRecipe: apiGetRecipeById,
};

export default connect(
    mapStatetoProps,
    mapDispatchToProps,
)(withLocalize(RecipePage as any) as any);
