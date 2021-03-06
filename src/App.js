import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'black',
            text: 'Click to change COLOR'
        }
    }

    handleClick = () => {
        if (this.state.color === 'black') {
            axios.get(
                'http://www.colr.org/json/color/random'
            ).then((response) => {
                this.setState({color: `#${response.data.colors[0].hex}`})
            }).catch(error => {
                console.log('Error fetching data', error)
            })
        } else {
            this.setState({color: 'black'})
        }
    };

    handleTextInput = (e) => {
        const text = e.target.value ? e.target.value : 'Click to change COLOR';
        this.setState({text})
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
                    {this.state.text}
                </h1>
            </header>
            <div>
                <input
                    type='text'
                    placeholder='Type something'
                    onChange={this.handleTextInput}>
                </input>
            </div>
        </div>
        );
    }
}

export default App;
