import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';
import App from './components/App';

const store = configureStore();

serviceWorker.register();

const render = Component => {
    return ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Component/>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;
        render(NextApp);
    });
}
