import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header';
import './style/main.css';

ReactDOM.render(
    <div className='root'>
        <Header />
    </div>,
    document.getElementById('app')
)
