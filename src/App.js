/**
 * Root Component of application
 * 
 * @file App.js
 * @author SachchidanandY 
*/

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './component/join/Join';
import Chat from './component/chat/Chat';

const App = () => (
    <Router>
        <Route path='/' exact component={Join} />
        <Route path='/chat'  component={Chat} />
    </Router>
);

export default App;
