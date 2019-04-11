import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';
import request from 'superagent';
import './styles/app.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            gifs: []
        };
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    
    handleTermChange(search) {
        const url = `http://api.giphy.com/v1/gifs/search?q=${search.replace(/\s/g, '+')}&api_key=d2YvdLWEdDLD9TYsnQnp6Cx03J7leWso`;

        request.get(url, (err, res) => {
            this.setState({ gifs: res.body.data })
        });
    }
    
    render() {
        return (
            <div className="greeting">
                <SearchBar onTermChange={search => this.handleTermChange(search)}/>
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));