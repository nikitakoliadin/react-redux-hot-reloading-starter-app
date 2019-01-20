import React from 'react';
import {shallow} from 'enzyme';

import Header from '../components/Header';

it('renders without crashing', () => {
    shallow(<Header/>);
});

it('contains correct className', () => {
    const header = shallow(<Header/>);
    expect(header.find('header').hasClass('App-header')).toBe(true);
});

it('renders text', () => {
    const header = shallow(<Header/>);
    const text = "React Redux Hot Reloading Starter App";
    expect(header.contains(text)).toEqual(true);
});
