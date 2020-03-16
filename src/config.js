/**
 * Config file contains all configurations
 *
 * @file config.js
 * @author SachchidanandY
*/

export const ENDPOINT = process.env.NODE_ENV === 'production' ? 'https://meeting-room-chat.herokuapp.com/' : 'http://localhost:5000/';
