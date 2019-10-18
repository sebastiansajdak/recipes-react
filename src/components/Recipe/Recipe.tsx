import * as React from 'react';
import * as styles from './Recipe.scss';
import NoThumb from '../../resources/no-thumbnail.png';
import { Link } from 'react-router-dom';

const prepareCreatedDate = (date: any) => {
    const preparedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    return <time dateTime={preparedDate}>{preparedDate}</time>;
};

const Recipe = ({ data, isFull }: any) => {
    const created = new Date(parseInt(`${data.created.seconds}000`, 10));
    const formattedDate = prepareCreatedDate(created);

    return (
        <div className='card'>
            <Link
                to={`/recipe/${data.id}`}
                className='card-image'
            >
                <figure className='image is-4by3'>
                    <img src={data.image || NoThumb} alt={data.title} />
                </figure>
            </Link>
            <div className='card-content'>
                <div className='content'>
                    <p className='title is-4'>{data.title}</p>

                    {isFull &&
                        <p>{ data.description }</p>
                    }

                    <br />
                    {formattedDate}
                    <br />
                </div>
            </div>
            <footer className='card-footer'>
                <a className='card-footer-item'>
                    <span className='icon is-small'>
                        <i
                            className='fas fa-eye'
                            aria-hidden='true'
                        ></i>
                        <span className={styles.count}>{data.views}</span>
                    </span>
                </a>
                <a className='card-footer-item'>
                    <span className='icon is-small'>
                        <i
                            className='fas fa-heart'
                            aria-hidden='true'
                        >
                        </i>
                        <span className={styles.count}>{data.likes}</span>
                    </span>
                </a>
                <a className='card-footer-item'>
                    <span className='icon is-small has-text-danger'>
                        <i
                            className='fas fa-trash'
                            aria-hidden='true'
                        ></i>
                    </span>
                </a>
            </footer>
        </div>
    );
};

export default React.memo(Recipe);
