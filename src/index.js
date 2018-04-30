import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { withRouter } from 'react-router-dom'

import { ConnectedRouter, routerReducer } from 'react-router-redux'

// PAGES
import Home from './pages/Home'
import Courses from './pages/Courses'
import Course from './pages/Course'

const history = createHistory();
const store = createStore(
    combineReducers({
      router: routerReducer
    }),
);

function mapStateToProps(state, ownProps) {
    return { };
  }

const Layout = withRouter(connect(mapStateToProps)(App));

// const Courses = () => (<h1>Courses</h1>)

ReactDOM.render(<Provider store={store}>
                    <ConnectedRouter history={history}>
                        <Layout>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/courses' component={Courses}/>
                            <Route path='/courses/:course' component={Course}/>
                        </Layout>
                    </ConnectedRouter>
                </Provider>, document.getElementById('root'));
