import React, { Component } from 'react'
import { connect } from 'react-redux'

const action = (data) => ({
    type: 'DATA_ACTION',
    data
});

class IndexContainer extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.dispatch(action('bazinga!!!!'));
    }
    render() {
        return (
            <div>
                <p>this is indexContainer !!!</p>
                <h1>{this.props.data}</h1>
                <button onClick={this.handleClick}>hahahaha</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.data
});

export default connect(mapStateToProps)(IndexContainer)