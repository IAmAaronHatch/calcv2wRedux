import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class LandingPage extends Component {
    render() {
        return (
            <div>
                LandingPage
                <Link to='/calc'>
                    <button>
                        Calculator ->
                    </button>
                </Link>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(LandingPage)