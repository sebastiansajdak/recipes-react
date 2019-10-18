import * as React from 'react';
import * as styles from './RecipePage.scss';
import cn from 'classnames';
import IRecipe from '../../types/recipe';
import Recipe from '../../components/Recipe';

interface IProps {
    getRecipe: (id: string) => void;
    clearDataRecipe: () => void;
    match: {
        params: {
            id: string;
        };
    };
    item: IRecipe;
}

class RecipePage extends React.Component<IProps> {

    componentDidMount() {
        const {
            getRecipe,
            match: {
                params: {
                    id,
                },
            },
        } = this.props;

        getRecipe(id);
    }

    componentWillUnmount() {
        const { clearDataRecipe } = this.props;
        clearDataRecipe();
    }

    render() {
        const { item } = this.props;

        return item && <div className={cn('container', styles.recipePageWrapper)}>
        <h1 className='title'>
            {item.title}
        </h1>

        <div className='columns is-desktop'>
            <div className='column'>
                <Recipe
                    data={item}
                    isFull
                />
            </div>
        </div>
    </div>;
    }
}

export default RecipePage;
