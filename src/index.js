import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            gifs: [
                {
                    id: 1,
                    url: 'https://media.giphy.com/media/XZlsb4BRzENr7tlEmN/giphy.gif'
                },
                {
                    id: 2,
                    url: 'https://media.giphy.com/media/McVXwnNOXfBmFyLkNV/giphy.gif'
                },
                {
                    id: 3,
                    url: 'https://media.giphy.com/media/LpWR8NmxOSYKDuLvJE/giphy.gif'
                }
            ]
        }
    }
    
    handleTermChange(search){
        console.log(search);
    }
    
    render() {
        return (
            <div className="greeting">
                <SearchBar onTermChange={this.handleTermChange}/>
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));