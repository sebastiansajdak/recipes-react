import * as React from 'react';
import * as styles from './TopBar.scss';
import cn from 'classnames';
import Flag from '../Flag';
import { LANGUAGES } from '../../constants/common';
import { Link } from 'react-router-dom';
import { Translate } from 'react-localize-redux';

interface IProps {
    setActiveLanguage: (langCode: LANGUAGES) => void;
    activeLanguage: {
        code: LANGUAGES;
    };
}
interface IState {
    isMobileMenuActive: boolean;
}

class TopBar extends React.PureComponent<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            isMobileMenuActive: false,
        };
    }

    toggleMenuBurger = () => {
        this.setState((prevState: IState) => ({
            isMobileMenuActive: !prevState.isMobileMenuActive,
        }));
    }

    changeLanguage = (lang: LANGUAGES) => {
        const { setActiveLanguage } = this.props;

        setActiveLanguage(lang);
    }

    render() {
        const { activeLanguage } = this.props;
        const { isMobileMenuActive } = this.state;
        return (
            <nav className={cn('navbar is-fixed-top', styles.nav)}>
                <div className='container'>
                    <div className='navbar-brand'>
                        <Link
                            to='/'
                            className='navbar-item'
                        >
                            <Translate id='menu.title' />
                        </Link>
                        <span
                            role='button'
                            className={cn('navbar-burger burger', isMobileMenuActive && 'is-active')}
                            aria-label='menu'
                            aria-expanded='false'
                            onClick={this.toggleMenuBurger}
                        >
                            <span aria-hidden='true'></span>
                            <span aria-hidden='true'></span>
                            <span aria-hidden='true'></span>
                        </span>
                    </div>
                    <div className={cn('navbar-menu', isMobileMenuActive && 'is-active')}>
                        <div className='navbar-end'>
                            <span className='navbar-item'>
                                <Link
                                    to='/add'
                                    className='button is-primary'
                                >
                                    <strong>
                                        <Translate id='menu.addRecipe' />
                                    </strong>
                                </Link>
                            </span>
                            <div className='navbar-item has-dropdown is-hoverable'>
                                <span className='navbar-link'>
                                    <Flag lang={LANGUAGES[activeLanguage.code]} />
                                </span>

                                <div className='navbar-dropdown'>
                                    <a
                                        className='navbar-item'
                                        onClick={() => this.changeLanguage(LANGUAGES.PL)}
                                    >
                                        <Flag lang={LANGUAGES.PL} />
                                    </a>
                                    <a
                                        className='navbar-item'
                                        onClick={() => this.changeLanguage(LANGUAGES.EN)}
                                    >
                                        <Flag lang={LANGUAGES.EN} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default TopBar;
