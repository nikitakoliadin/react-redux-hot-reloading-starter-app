import React from 'react';
import {shallow} from 'enzyme';

import Body from '../components/Body';

it('renders without crashing', () => {
    shallow(<Body/>);
});

it('contains correct className', () => {
    const body = shallow(<Body/>);
    expect(body.find('div').hasClass('App-body')).toBe(true);
});
