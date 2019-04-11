import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Calc.css'

class Calculator extends Component {
    render () {
        return (
            <div>
                Calculator

                <div>
                    {/* Body, Where the Calculator will go */}

                    <span> 
                        * Inputs and Total -> *
                        {/* {this.props.inputValue / total} */}
                    </span>


                    <button> 1 </button>
                    <button> 2 </button>
                    <button> 3 </button>
                    <button> 4 </button>
                    <button> 5 </button>
                    <button> 6 </button>
                    <button> 7 </button>
                    <button> 8 </button>
                    <button> 9 </button>
                    <button> 0 </button>


                    <button> + </button>
                    <button> - </button>
                    <button> x </button>
                    <button> / </button>
                    <button> = </button>


                </div>

                <Link to='/'>
                <button> Home </button>
                </Link>
            </div>
        )
    }
}

export default Calculator;