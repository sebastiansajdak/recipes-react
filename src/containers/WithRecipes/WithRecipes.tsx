import * as React from 'react';
import IRecipe from '../../types/recipe';
import { connect } from 'react-redux';
import { IStore } from '../../types';
import {
    apiGetRecipes,
    clearDataRecipes,
} from '../../actions/recipes';

interface IProps {
    getRecipes: (llimit: number) => void;
    clearDataRecipes: () => void;
    items: IRecipe[];
}

const WithRecipes = (WrappedComponent: any) => (settings: any) => {
    class Wrapper extends React.Component<IProps> {
        componentDidMount() {
            const { getRecipes } = this.props;

            getRecipes(settings.limit);
        }

        componentWillUnmount() {
            const { clearDataRecipes } = this.props;
            clearDataRecipes();
        }

        render() {
            const { items } = this.props;

            return (
                items.length ?
                    <WrappedComponent data={items}/>
                :
                    <div className='container'>
                        <div className='columns is-centered'>
                            <a className='button is-loading'>Loading</a>
                        </div>
                    </div>
            );
        }
    }

    const mapStatetoProps = ({ recipes }: IStore) => ({
        items: recipes.items,
    });

    const mapDispatchToProps = {
        clearDataRecipes,
        getRecipes: apiGetRecipes,
    };

    return connect(mapStatetoProps, mapDispatchToProps)(Wrapper as any);
};

export default WithRecipes;
