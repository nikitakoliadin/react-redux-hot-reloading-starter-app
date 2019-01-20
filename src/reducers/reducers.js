import {combineReducers} from 'redux';

import headersReducer from './headersReducer';
import activeHeaderReducer from './activeHeaderReducer';

const reducers = combineReducers({
    headers: headersReducer,
    activeHeader: activeHeaderReducer
});

export default reducers;
