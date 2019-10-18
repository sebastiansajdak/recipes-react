import * as React from 'react';
import * as styles from './FormField.scss';
import { Translate } from 'react-localize-redux';

const FormField = ({
    input,
    label,
    type,
    meta: {
        touched,
        error,
        warning,
    },
}: any) => (
    <div className={styles.formWrapper}>
        <label className='title is-5'>
            <Translate id={label} />
        </label>
        <div className={styles.inputBlock}>
            {type === 'text' ?
                <input
                    className='input is-medium'
                    {...input}
                    type={type}
                />
            :
                <textarea
                    className='textarea is-medium'
                    {...input}
                />
            }
            {touched && ((error && <span>{<Translate id={error} />}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
);

export default FormField;
