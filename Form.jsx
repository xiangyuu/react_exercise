import React, { Component } from 'react'
import './Form.css'
export default class form extends Component {
    render() {
        {console.log('a',this.props.all)}
        return (
            <div id='item'>
                <p>姓名:{this.props.all.username}</p>
                <p>年齡:{this.props.all.age}</p>
                <p>內容:{this.props.all.content}</p>
            </div>
        )
    }
}
