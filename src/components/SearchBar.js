import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { search: ''}
    }

    onInputChange(search) {
        this.setState({search});
        this.props.onTermChange(search);
    }

    render() {
        return (
            <div className="search">
                <input onChange={event => this.onInputChange(event.target.value)} />
            </div>
        )
    }
}

export default SearchBar;