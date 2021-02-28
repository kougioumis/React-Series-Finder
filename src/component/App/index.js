import React, {Component} from 'react';


import Main from '../Main';

import './App.css';
import 'whatwg-fetch';



class Index extends Component{


    render() {
        return (
            <div className="App">
            <header className="App-header">
                <h1 className="App-Title"> Tv Series list </h1>
            </header>
            <Main/>
            </div>
        );
    }
}


export default Index;
