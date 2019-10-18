import * as React from 'react';
import * as styles from './Flag.scss';
import cn from 'classnames';
import FlagEn from '../../resources/icons/en.inline.png';
import FlagPl from '../../resources/icons/pl.inline.png';
import { LANGUAGES } from '../../constants/common';
import { Translate } from 'react-localize-redux';

interface IProps {
    lang: LANGUAGES;
}

const Flag = ({ lang }: IProps) =>
    <section className={styles.flag}>
        <span><Translate id={`flag.${lang.toLowerCase()}`} /></span>
        <span className={cn('icon is-small', styles.img)}>
            <img src={lang === LANGUAGES.PL ? FlagPl : FlagEn} />
        </span>
    </section>;

export default React.memo(Flag as any);
