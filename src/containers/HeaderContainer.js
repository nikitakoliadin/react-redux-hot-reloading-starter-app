import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {selectHeader} from '../actions/actions';

class HeaderContainer extends Component {
    showListOfHeaders() {
        return this.props.headers.map((header) => {
            return (
                <button key={header.id} onClick={() => this.props.selectHeader(header)}>{header.name}</button>
            );
        });
    }

    render() {
        return (
            <div>
                {this.showListOfHeaders()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        headers: state.headers
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectHeader: selectHeader}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(HeaderContainer);
