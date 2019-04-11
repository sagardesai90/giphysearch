import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

class App extends React.Component {
    handleTermChange(search){
        console.log(search);
    }
    
    render() {
        return (
            <div className="greeting">
                <SearchBar onTermChange={this.handleTermChange}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));