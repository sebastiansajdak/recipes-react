import * as React from 'react';
import configureStore from './redux/configureStore';
import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
import reducers from './reducers';
import Routes from './containers/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { LocalizeProvider } from 'react-localize-redux';
import { Provider } from 'react-redux';

const App = () => {
    const store = configureStore({}, reducers);
    firebase.initializeApp(firebaseConfig);
    return (
        <Provider store={store}>
            <LocalizeProvider>
                <Router>
                    <Routes />
                </Router>
            </LocalizeProvider>
        </Provider>
    );
};

export default hot(module)(App);
