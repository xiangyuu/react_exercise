import React from 'react'
import Form from './Component/Form'
import Dialog from './Component/Dialog'
import './App.css'
class App extends React.Component{
  state={
    info:[
    {
      username:'A',
      age:'16',
      content:'Hello'
    },
    {
      username:'B',
      age:'30',
      content:'Hi'
    },
    {
      username:'C',
      age:'48',
      content:'Hey'
    }
  ],
    isShow:false,
    bk:''
  }

  getChildMsg=(data)=>{
   this.setState({
     info:[...this.state.info,data]
   })
  }

    register=(e)=>{
     this.setState({
       isShow:true,
       bk:'green'
     })
    }
  
  doCloseDialog=(e)=>{
    this.setState({
      isShow:false
    })
  }
  render(){
    return(
      <div className='list' style={{backgroundColor:this.state.bk}}>
         {this.state.info.map((value,index)=>
           (<Form all={this.state.info[index]}/>)
         )}
          <div id='inputMsg' className={this.state.isShow?'show':'hidden'}>
            <Dialog getMsg={this.getChildMsg} closeDialog={this.doCloseDialog}/>
          </div>
          <button id='btn' onClick={this.register}>註冊</button>
      </div>
    )
  }
}
export default App