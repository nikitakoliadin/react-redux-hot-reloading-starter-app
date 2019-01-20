import React, {Component} from 'react';
import {connect} from 'react-redux';

class BodyContainer extends Component {
    static logUpdate() {
        console.log("BodyContainer component has been updated");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        BodyContainer.logUpdate();
    }

    showBody() {
        if (this.props.activeHeader) {
            return (
                <div>
                    <hr/>
                    <div>{this.props.activeHeader.description}</div>
                    <hr/>
                    <br/>
                    <img src={this.props.activeHeader.imageSrc} className="App-logo" alt="logo"/>
                </div>
            );
        } else {
            return (
                <div>
                    <hr/>
                    <h4>Press any button</h4>
                </div>
            );
        }
    }

    render() {
        return (
            this.showBody()
        );
    }
}

function mapStateToProps(state) {
    return {
        activeHeader: state.activeHeader
    };
}

export default connect(mapStateToProps)(BodyContainer);
