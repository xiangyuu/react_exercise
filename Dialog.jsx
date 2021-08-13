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
                    <div className='formInput'>
                        請輸入姓名:&nbsp;&nbsp;<input id='input1' type="text" name='name' placeholder='ex:王小明' value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})} />
                    </div>
                    <div className='formInput'>
                        請輸入年齡:&nbsp;&nbsp;<input id='input2' type="text" name='age' placeholder='ex:18' value={this.state.age} onChange={(e)=>this.setState({age:e.target.value})}/>
                    </div>
                    <div className='formInput'>
                        請輸入內容:&nbsp;&nbsp;<input id='input3' type="text" name='content' placeholder='ex:大家好' value={this.state.content} onChange={(e)=>this.setState({content:e.target.value})}/>
                    </div>
                    <div className='formInput'>
                        <div onClick={this.handleSubmit}>提交</div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
