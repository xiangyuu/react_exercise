import React, { Component } from 'react'
import './Dialog.css'
export default class btn extends Component {
    state=[{
        username:'',
        age:'',
        content:'',
        },
    ]

    handleSubmit=()=>{
      this.props.getMsg(this.state)
      this.props.closeDialog()
      this.setState({
          username:'',
          age:'',
          content:'',
      })
    }


    render() {
        return (
            <div>
                <div  id='register'>
                    請輸入姓名:<input id='input1' type="text" name='name' value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})} />
                    <br /> <br />
                    請輸入年齡:<input id='input2' type="text" name='age' value={this.state.age} onChange={(e)=>this.setState({age:e.target.value})}/>
                    <br /> <br />
                    請輸入內容:<input id='input3' type="text" name='content' value={this.state.content} onChange={(e)=>this.setState({content:e.target.value})}/>
                    <br /> <br />
                    <br />
                    <div onClick={this.handleSubmit}>提交</div>
                </div>
            </div>
        )
    }
}
