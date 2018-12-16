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
                <form className="form-inline " >

                    <div className='row col-12 no-gutters border'>

                        <div className='col-12 '>
                            <Input  
                                    inputId='url1' label='URL: ' elementType='input' 
                                    type='text' placeholder='http://' 
                                    style={{}}
                                    // labelStyle={labelCommonStyle}
                                    changed={(event)=>{this.changedHandler(event)}} 
                            />
                        
                    </div>
                </div>


             
                
                </form>

                {/* <form className="form-inline" >
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" />
                    </div>
                    
                    <button type="submit" className="btn btn-default">Submit</button>
                </form> */}

                <button onClick={this.sendHandler} className="btn btn-primary">SEND</button>



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