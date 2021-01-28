import React, { Component } from 'react'

export class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             trail:"",
        }
    }
    
    render() {
        console.log(this.state.trail);
        return (
            <div>
                hiiiii
                <input type="text" onChange={()=>this.setState({trail:"hii"})} />
            </div>
        )
    }
}

export default Cart

