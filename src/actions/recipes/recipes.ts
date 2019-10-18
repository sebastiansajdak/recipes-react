import firebase from 'firebase';
import IAction from '../../types/action';
import IRecipe from '../../types/recipe';
import { DATABASE_NAME } from '../../constants/common';
import { Dispatch } from 'redux';
import {
    GET_RECIPES,
    GET_RECIPE,
    CLEAR_DATA_RECIPE,
    CLEAR_DATA_RECIPES,
} from '../../constants/actionTypes';

export const apiGetRecipes = (limit: number) =>
    async (dispatch: any) => {
        const db = firebase.firestore();
        const collection = db
            .collection(DATABASE_NAME)
            .orderBy('created', 'desc')
            .limit(limit);

        let lastVisible: any;
        const recipes: IRecipe[] = [];

        await collection.get().then((snapshot: any) => {
            lastVisible = snapshot.docs[snapshot.docs.length - 1];
            snapshot.forEach((doc: any) => {
                recipes.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
        });

        dispatch({
            type: GET_RECIPES,
            payload: {
                data: {
                    lastVisible,
                    recipes,
                },
            },
        });
    };

export const apiGetRecipeById = (id: string) =>
    async (dispatch: Dispatch<IAction>) => {
        const db = firebase.firestore();
        const collection = db.collection(DATABASE_NAME).doc(id);
        let recipe: IRecipe = null;

        await collection.get().then((snapshot: any) => {
            if (snapshot.exists) {
                recipe = {
                    id: snapshot.id,
                    ...snapshot.data(),
                };
            }
        });

        dispatch({
            type: GET_RECIPE,
            payload: {
                data: {
                    recipe,
                },
            },
        });
    };

export const clearDataRecipe = () => ({
    type: CLEAR_DATA_RECIPE,
    payload: {},
});

export const clearDataRecipes = () => ({
    type: CLEAR_DATA_RECIPES,
    payload: {},
});
