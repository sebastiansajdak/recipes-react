import * as React from 'react';
import AddRecipe from '../AddRecipe';
import globalTranslations from '../../translations.json';
import MainPage from '../../components/MainPage/';
import RecipePage from '../RecipePage';
import Recipes from '../../components/Recipes';
import TopBar from '../../components/TopBar';
import WithRecipes from '../WithRecipes';
import { LANGUAGES } from '../../constants/common';
import { renderToStaticMarkup } from 'react-dom/server';
import { Route } from 'react-router-dom';

interface IProps {
    initialize: (settings: any) => void;
    activeLanguage: {
        code: LANGUAGES;
    };
}

class Routes extends React.Component<IProps> {

    constructor(props: IProps) {
        super(props);
        const { initialize } = this.props;

        initialize({
            languages: [
              { name: 'Polish', code: LANGUAGES.PL },
              { name: 'English', code: LANGUAGES.EN },
            ],
            translation: globalTranslations,
            options: {
                renderToStaticMarkup,
                defaultLanguage: LANGUAGES.PL,
            },
        });

    }

    render() {
        const { activeLanguage } = this.props;

        return !!activeLanguage && (
            <section>
                <TopBar />
                <Route exact path='/' component={WithRecipes(MainPage)({ limit: 3 })} />
                <Route exact path='/add' component={AddRecipe} />
                <Route exact path='/recipes' component={WithRecipes(Recipes)({ limit: 25 })} />
                <Route exact path='/recipe/:id' component={RecipePage} />
            </section>
        );
    }
}

export default Routes;
