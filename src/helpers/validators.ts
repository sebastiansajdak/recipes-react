import {
    MAX_NAME_LENGTH,
    MAX_RECIPE_LENGTH,
} from '../constants/common';

export const required = (value: string) => value ?
    undefined : 'validators.required';

export const maxNameValue = (value: string) =>
    value && value.length > MAX_NAME_LENGTH ?
        'validators.maxTitleValue'
        : undefined;

export const maxRecipeValue = (value: string) =>
    value && value.length > MAX_RECIPE_LENGTH ?
        'validators.maxRecipeValue'
        : undefined;
