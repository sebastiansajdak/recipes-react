import * as React from 'react';
import * as styles from './Recipes.scss';
import cn from 'classnames';
import IRecipe from '../../types/recipe';
import Recipe from '../../components/Recipe';
import { Translate } from 'react-localize-redux';

interface IProps {
    data: IRecipe[];
}

const Recipes = ({ data }: IProps) =>
    <div className={cn('container', styles.recipesPageWrapper)}>
        <h1 className='title'>
            <Translate id='mainPage.title' />
        </h1>

        <div className='columns is-multiline is-centered is-mobile'>
            {data.map((item: any) =>
                <div
                    key={item.id}
                    className='column is-one-third-desktop is-half-tablet is-full-mobile'
                >
                    <Recipe data={item} />
                </div>,
            )}
        </div>
    </div>;

export default Recipes;
