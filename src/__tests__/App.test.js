import React from 'react';
import {shallow} from 'enzyme';

import App from '../components/App';

it('renders without crashing', () => {
    shallow(<App/>);
});

it('contains correct className', () => {
    const app = shallow(<App/>);
    expect(app.find('div').hasClass('App')).toBe(true);
});
