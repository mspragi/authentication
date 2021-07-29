import React from 'react';
import { render } from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import "jquery/dist/jquery";
import "popper.js/dist/popper"
import App from './App';
//import axios from 'axios';

// axios.defaults.baseURL = "http://localhost:3000/"
// axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')


render(<App/>, document.getElementById('root'));