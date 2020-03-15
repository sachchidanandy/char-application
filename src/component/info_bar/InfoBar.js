/**
 * Infobar to make header and provide basic info and functionality to chat room
 *
 * @file InfoBar.js
 * @author SachchidanandY
*/

import React from 'react';

import './_info_bar.css';
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

const InfoBar = ({ room }) => (
    <div className='infoBar'>
        <div className='leftInnerContainer'>
            <img className='onlineIcon' src={onlineIcon} alt='online'/>
            <h3>{room}</h3>
        </div>
        <div className='rightInnerContainer'>
            <a href='/'> <img className='onlineIcon' src={closeIcon} alt='close'/> </a>
        </div>
    </div>
);

export default InfoBar;
