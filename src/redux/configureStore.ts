import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    applyMiddleware,
    createStore,
} from 'redux';

export default (
    initialState: any,
    reducers: any,
) => {
    const middlewares: any[] = [
        promise(),
        thunk,
    ];

    const store: any = createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(...middlewares)),
    );

    return store;
};
