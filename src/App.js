import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'black'
        }
    }

    handleClick = () => {
        if (this.state.color === 'black') {
            axios.get(
                'http://www.colr.org/json/color/random'
            ).then((response) => {
                this.setState({color: `#${response.data.colors[0].hex}`})
            })
        } else {
            this.setState({color: 'black'})
        }
    };

    render() {
        return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1
                    className="Colored-text"
                    onClick={this.handleClick}
                    style={{color: this.state.color}}>
                    Click to change color
                </h1>
            </header>
        </div>
        );
    }
}

export default App;
