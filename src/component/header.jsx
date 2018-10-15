import React, { Component } from 'react';
import {cube} from './math';
import '../font/icon/iconfont.css';
import '../style/component/header.scss';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <i className='iconfont icon-sousuo'></i>
            </div>
        );
    }
}