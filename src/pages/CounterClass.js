

import { Component } from "react";

class CounterClass extends Component{
    constructor(){
        super()
        this.state ={
            count:0,
            name:"hello"
        }
    }
    inc =() =>{
        this.setState({
            count:this.state.count + 1
        })
    }
    dec=()=>{
        const Counter = this.state.count
        this.setState({
            count:Counter>0?Counter - 1:Counter
        })
    }
    changeName=()=>{
        this.setState({
            name:"world"
        })
    }
    render(){
        return(
            <>
             <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
                <div className="card shadow-lg p-4">
                    <h1 className="text-primary mb-4">Counter: {this.state.count}</h1>
                    {/* <p className="text-secondary">{this.state.name}</p> */}
                    <div className="button-group mt-3 justify-content-between">
                        {/* <button onClick={this.changeName} className="btn btn-primary mx-2">Change Name</button> */}
                        <button onClick={this.dec} className="btn btn-danger mx-2 fs-1">-</button>
                        <button onClick={this.inc} className="btn btn-success mx-2 fs-2">+</button>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default CounterClass