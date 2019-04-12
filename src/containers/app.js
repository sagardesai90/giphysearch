import React from 'react';
import GifsTemp from '../components/GifsTemp';
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div>
                <GifsTemp gifs={ this.props.gifs } />
            </div>
        );
    }
}
//linking the gifs from our GifsReducer to this.props.gifs 
function mapStateToProps(state) {
    return {
        gifs: state.gifs
    };
}

export default connect(mapStateToProps)(App);