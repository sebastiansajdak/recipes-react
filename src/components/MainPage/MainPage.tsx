import * as React from 'react';
import * as styles from './MainPage.scss';
import Banner from '../../resources/baner.jpg';
import cn from 'classnames';
import IRecipe from '../../types/recipe';
import Recipe from '../../components/Recipe/Recipe';
import { Link } from 'react-router-dom';
import { Translate } from 'react-localize-redux';

interface IProps {
    data: IRecipe[];
    getRecipes: () => void;
}

const MainPage = (props: IProps) =>
<section className={styles.mainPageWrapper}>
    <div>
        <img src={Banner} />
    </div>
    <div className='container is-fullhd'>
        <div className='container'>
            <h1 className={cn('title', styles.header)}>
                <Translate id='mainPage.title' />
            </h1>

            <div className='columns is-multiline is-centered is-mobile'>
                {props.data.map((item: any) =>
                    <div
                        key={item.id}
                        className='column is-one-third-desktop is-half-tablet is-full-mobile'
                    >
                        <Recipe data={item} />
                    </div>,
                )}
            </div>

            <div className={cn('columns is-desktop is-mobile is-centered', styles.showMore)}>
                <Link
                    to='/recipes'
                    className='button is-info is-rounded'
                >
                    <Translate id='mainPage.showMore' />
                </Link>
            </div>
        </div>
    </div>
    </section>;

export default React.memo(MainPage);
