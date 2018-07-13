import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import { connect } from 'react-redux';
import Main from '../routes';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                
                <BrowserRouter>
                <div>
                <Header
                    loading={this.props.loading} />
                <Main />
                </div>
                </BrowserRouter>
            </div>
        );
    }
}

App.propTypes = {
    //children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);