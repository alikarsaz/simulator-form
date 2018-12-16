import React,{Component} from 'react'
import Hoc from '../../hoc/hoc'
import Input from '../../Components/input/input'
import './FirstPage.css'
// import axios from '../../axios'
import {connect } from 'react-redux'

// let newData={}
class FirstPage extends Component {

    state={
        data:{
            date:"",
            time:""
        }
    }
    
    timeHandler=()=>{
        const tempDate = new Date();
        // console.log(tempDate)
        const date = tempDate.getFullYear() + '-' +
             (tempDate.getMonth()+1) + '-' + tempDate.getDate() 
            //  +' '
            //  + tempDate.getHours()+':'+ tempDate.getMinutes()+':'
            //  + tempDate.getSeconds();
        // const currDate=tempDate.getFullYear()
        // const currDate = "Current Date= "+date;
        const time=tempDate.getHours()+':'+ tempDate.getMinutes()+':'
         + tempDate.getSeconds();
        const tempState={
            ...this.state
        }
        tempState["date"]=date;
        tempState['time']=time;
        this.setState({data:tempState})
  


    }

    componentDidMount () {
        this.timeHandler();
        // const refreshTime=setInterval(this.timeHandler,1000);	
        // const t=this.timeHandler();
        // const timeElement=this.refs.transactionTime;
        // const myRef = React.createRef('transactionTime');
        // timeElement.value='13:30'
        // getElementById('transactionTime').value='13:30'
    }


    sendHandler=()=> {

        // newData=this.state.data;
        // this.props.globalSave(this.state);
        const ali=this.state.data['date'];
        console.log(ali)

    }

    changedHandler=(event)=>{
        // console.log(event.target.id)
        const updatedState={...this.state.data};
        const updatedElement=event.target.value;
        updatedState[event.target.id]=updatedElement;
        // console.log(updatedState)
        this.setState({data:updatedState})
        // console.log(this.state)

    }

    render () {

        const labelCommonStyle={width:'125px',color:'#616264'};

        return (
            <Hoc >
                <form id='inputForm' className='form-horizontal' >

                <div className='w-100 no-gutters row'>

                    <div className='col-sm-12 col-md-12 '>
                        <Input  
                                inputId='url1' label='URL:' elementType='input' 
                                type='text' placeholder='http://' 
                                // labelStyle={labelCommonStyle}
                                changed={(event)=>{this.changedHandler(event)}} 
                                />
                    
                    </div>
                </div>

                <div className="form-group row border no-gutters">

                    <div className="col-11 col-md-4">                    

                            <Input className="form-control" 
                                inputId='TRN1' label='Transaction Number' elementType='input' 
                                type='number' placeholder='Enter Number' style={{height:'50%',marginTop:'20px'}}
                                labelStyle={labelCommonStyle}
                                changed={(event)=>{this.changedHandler(event)}} 
                                />
                                <Input className="form-control"  labelStyle={{color:'#616264',width:'160px',marginTop:'25px'}}
                            inputId='amount' label='Amount' elementType='input' 
                            type='number' placeholder='Enter Amount' style={{marginTop:'20px'}}
                            
                            changed={(event)=>{this.changedHandler(event)}} 
                            />

                    </div>

                    

                    <div className="col-11 col-md-4 " >
                        <Input  style={{height:'150px'}} elementType='textarea'  
                            label='Sending Data:' type='text' placeholder='' inputId='sendData'
                            labelStyle={labelCommonStyle}
                            // changed={(event)=>{this.changedHandler(event)}}
                             />
                    </div>

                      <div className="col-11 col-md-4 " >
                        <Input  style={{height:'150px'}} elementType='textarea'  
                            inputId='sendConfirmation'
                            label='Sending confirmation:' type='text' placeholder='' 
                            labelStyle={labelCommonStyle}
                            // changed={(event)=>{this.changedHandler(event)}}
                            />
                    </div>

                </div>

                

                <div className="form-group row border no-gutters">

                <div className="col-11 col-md-4 border ">                    

                        <Input elementType='card' label='Card Number' type='number'
                            placeholder='' inputId='card' 
                            // style={{margin:'0px' , textAlign:'center', width:'60px' }}
                            labelStyle={labelCommonStyle}
                            changed={(event)=>{this.changedHandler(event)}}
                         /> 
                          <Input inputId='track2' label='Track2' elementType='input' 
                                type='text' placeholder='' 
                                style={{margin:'1px'}}
                                labelStyle={labelCommonStyle}
                                changed={(event)=>{this.changedHandler(event)}} 
                                />
                            <Input inputId='pin' label='PIN' elementType='input' 
                                type='number' placeholder='' 
                                style={{margin:'1px', marginTop:'10px'}}
                                labelStyle={labelCommonStyle}
                                changed={(event)=>{this.changedHandler(event)}} 
                                />


                </div>



                <div className="col-11 col-md-4 " >
                    <Input  style={{height:'150px'}} elementType='textarea'  
                        label='Receiving Data:' type='text' placeholder='' inputId='recieveData'
                        labelStyle={labelCommonStyle}
                        // changed={(event)=>{this.changedHandler(event)}}
                        />
                </div>

                <div className="col-11 col-md-4 " >
                    <Input  style={{height:'150px'}} elementType='textarea'  
                        inputId='receiveConfirmation'
                        label='Receiving confirmation:' type='text' placeholder='' 
                        labelStyle={labelCommonStyle}
                        // changed={(event)=>{this.changedHandler(event)}}
                        />
                </div>
                </div>

                <div className='row no-gutters'>

                    <div className='col-lg col-md-4 col-sm-4 col-12 border' >
                   
                        <Input className="form-control" 
                                    inputId='terminalCode' label='Terminal Code' elementType='input' 
                                    type='text' placeholder=''
                                    style={{height:"50%"}}
                                    labelStyle={labelCommonStyle}
                                    changed={(event)=>{this.changedHandler(event)}} 
                                    />
                        
                   </div>
                   <div className='col-lg col-md-4 col-sm-4 col-12 border' >
                  
                        <Input className="form-control" 
                                            inputId='merchantCode' label='Merchant Code' elementType='input' 
                                            type='text' placeholder=''
                                            style={{height:"50%"}}
                                            labelStyle={labelCommonStyle}
                                            changed={(event)=>{this.changedHandler(event)}} 
                                            />
                                              
                   </div>
                   <div className='col-lg col-md-4 col-sm-4 col-12 border' >
                  
                        <Input className="form-control" 
                                            inputId='commandId' label='Command Id' elementType='input' 
                                            type='text' placeholder=''
                                            style={{height:"50%"}}
                                            labelStyle={labelCommonStyle}
                                            changed={(event)=>{this.changedHandler(event)}} 
                                            />
                                              
                   </div>

                    <div className='col-lg-3 col-md col-sm-6 col border' >
                   
                    <Input inputId='transactionDate' label='Date' elementType='input' 
                                type='date' placeholder='' 
                                name='transactionDate'
                                // value={this.state.data['date']}
                                
                                // value='2017-06-01'
                                style={{maxWidth:'160px',margin:'1px', marginTop:'0px'}}
                                labelStyle={labelCommonStyle}
                                changed={(event)=>{this.changedHandler(event)}} 
                                /> 
                                               
                    </div>
                    <div className='col-lg-3 col-md col-sm-6 col border' >
                   
                    <Input inputId='transactionTime' label='Time' elementType='input' 
                                type='time' placeholder=''
                               
                                name='transactionTime'
                                style={{maxWidth:'160px',margin:'1px', marginTop:'0px'}}
                                labelStyle={labelCommonStyle}
                                changed={(event)=>{this.changedHandler(event)}} 
                                /> 
                                               
                    </div>
                    
                </div>


                </form>
                <button onClick={this.sendHandler} class="btn btn-primary">SEND</button>



            </Hoc>
        );
    }
}

const mapStateToProps=state =>{
    return{
        globalData:state.data
    }
}

const mapDispatchToProps= dispatch=>{
    
    return {
        globalSave :(completeState)=>(
            dispatch({type:'GLOBALSAVE', value:completeState})
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FirstPage);