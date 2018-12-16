import React,{Component} from 'react'
import Hoc from '../../hoc/hoc'
import Input from '../../Components/input/input'
import './RegisterPage.css'
import axios from '../../axios'
import {connect } from 'react-redux'
import CardInput from '../../Components/CardInput/cardInput';
import Modal from '../../Components/Modal/Modal'
import Spinner from '../../Components/spinner/spinner'

class RegisterPage extends Component {

    state={
        spinner:false,
        showModal:false,
        errorModal:false,
        modalMessage:'',
        data:{            
            cardNo: "",
            terminalCode: "",
            merchantCode: "",
            mobile:""
    }
       
    }

    modalClosedHandler =()=>{
        this.setState({showModal:false})
    }
    
    

    componentDidMount () {
       
    }


    dataValidation=()=>{

        let validationResults={};

        validationResults['validCard']= (parseInt(this.state.data['card1'])>999 && parseInt(this.state.data['card2'])>999 
        && parseInt(this.state.data['card3'])>999 && parseInt(this.state.data['card4'])>999 
        && parseInt(this.state.data['card1'])<10000 && parseInt(this.state.data['card2'])<10000 
        && parseInt(this.state.data['card3'])<10000 && parseInt(this.state.data['card4'])<10000) ? 0 :1;

        validationResults['validTerminalCode'] = (parseInt(this.state.data['terminalCode'])>0) ? 0 : 1;
        validationResults['validMerchantCode'] = (parseInt(this.state.data['merchantCode'])>0) ? 0 : 1;
        validationResults['validMobile'] = ((parseInt(this.state.data['mobile'])>8999999999)
                                            &&(parseInt(this.state.data['mobile'])<9400000000)) ? 0 : 1;

        var validationResult = 0;
        for (var property1 in validationResults) {
        validationResult += validationResults[property1];
        }
        
        if (validationResult>0) {
            return false;
            // this.setState({showModal:true,errorModal:true,modalMessage:' incorrect inputs !'})
        }
        else return true;

    }


    cardNumberHandler=()=>{
        if (parseInt(this.state.data['card1'])>999 && parseInt(this.state.data['card2'])>999 
            && parseInt(this.state.data['card3'])>999 && parseInt(this.state.data['card4'])>999 
            && parseInt(this.state.data['card1'])<10000 && parseInt(this.state.data['card2'])<10000 
            && parseInt(this.state.data['card3'])<10000 && parseInt(this.state.data['card4'])<10000) {
            
                const cardNumber=this.state.data['card1'].concat(this.state.data['card2'])
                .concat(this.state.data['card3']).concat(this.state.data['card4'])
                console.log('[CardnumerGen :]'+cardNumber)
            return cardNumber
        }
        else return '5022291052988514';
    }

    newFormHandler=()=>{
        document.getElementById('inputForm').reset();
    }

    sendHandler=()=> {

        const thePackage={
            
            // "mobile": "string",
            // "cardNo": "string",
            // "terminalCode": "string",
            // "merchantCode": "string"
        }

        const shouldContinue = this.dataValidation();

        if (shouldContinue) {

        thePackage['cardNo']=this.cardNumberHandler();
        thePackage['terminalCode']=this.state.data['terminalCode'];
        thePackage['merchantCode']=this.state.data['merchantCode'];
        thePackage['mobile']=this.state.data['mobile'];


        
        console.log(thePackage)

        axios.post('/register', thePackage)
            .then((response)=>{
                // this.setState({showModal:true})
                // this.setState({modalMessage:' Transaction Completed ✓'})
                this.setState({spinner:false,showModal:true, errorModal:false, modalMessage:' Registration Completed ✓ '})
                console.log(response)})
            .catch(err=>{
                this.setState({spinner:false,showModal:true,errorModal:true,modalMessage:' Something went wrong !'})
                console.log(err)})
                this.setState({spinner:true})
        }
        else{
            this.setState({spinner:false,showModal:true, errorModal:true, modalMessage:' incorrect inputs !'})
        }

    }

    changedHandler=(event)=>{
        // console.log(event.target.id)
        const updatedState={...this.state.data};
        const updatedElement=event.target.value;
        updatedState[event.target.id]=updatedElement;
        // console.log(updatedState)
        this.setState({data:updatedState})
        console.log(this.state)

    }

    pasteHandler=(e)=>{
        const pastedItem=e.clipboardData.getData('text')

        if ((parseInt(pastedItem)>999999999999999)&&(parseInt(pastedItem)<10000000000000000) ){
            const card1 = pastedItem.slice(0,4)
            const card2 = pastedItem.slice(4,8)
            const card3 = pastedItem.slice(8,12)
            const card4 = pastedItem.slice(12)

            let updateState={
                ...this.state.data
            }

            updateState['card1']=card1;
            updateState['card2']=card2;
            updateState['card3']=card3;
            updateState['card4']=card4;
            updateState['cardNo']=pastedItem;

            this.setState({data:updateState})

            document.getElementById("card1").value=card1
            document.getElementById("card2").value=card2
            document.getElementById("card3").value=card3
            document.getElementById("card4").value=card4
        }
        

    }


    render () {



        const labelCommonStyle={color:'#616264', marginTop:'5px', fontWeight:'bold' };
        const labelCommonStyleDual={color:'#616264', fontWeight:'bold', fontSize:'14px' };
        const spacer = (<div className='w-100' style={{height:'20px'}}></div>);


        const tempDate = new Date();
        let day = tempDate.getDate();
        let month = tempDate.getMonth() + 1;
        const year = tempDate.getFullYear();
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        const date = year + "-" + month + "-" + day; 
        let hour=tempDate.getHours()
        let minute=tempDate.getMinutes();
        if (minute < 10) minute = "0" + minute;
        if (hour < 10) hour = "0" + hour;
        const time=hour+':'+ minute;

        let spinner= this.state.spinner ? <div style={{height:'200px'}}> <Spinner /> </div> 
            : <div><div className='w-100' style={{height:'20px'}}></div><div className='w-100' style={{height:'20px'}}></div>
            </div>;

        const buttons = this.state.spinner ? null: 
            <div>
                {spacer}
                {spacer}
                <button onClick={this.sendHandler} style={{marginBottom:'50px'}} className="btn btn-primary">Send</button>
                <button onClick={this.newFormHandler} style={{marginBottom:'50px'}} className="btn ml-3 btn-primary">Renew</button>
            </div>


        const registerPage=(
            <Hoc>
            <form id='inputForm' className='form-horizontal' >

                    {spacer}

                    <div className='row'>

                        <div className='col-sm-6'>

                        <CardInput elementType='card' label='Card Number:' 
                                    placeholder='' inputId='card' 
                                    style={{textAlign:'center' }}
                                    labelStyle={{color:'#616264' , fontWeight:'bold', fontSize:'14px'}}
                                    changed={(event)=>{this.changedHandler(event)}}
                                    pasted={(event=>{this.pasteHandler(event)})}/> 

                        </div>
                        
                        <div className='col-sm-6'>

                            <Input className="form-control" 
                                    inputId='mobile' label='Mobile:'
                                    labelStyle= {labelCommonStyle}
                                    elementType='mobile' 
                                    // value={this.state.data['mobile']}
                                    type='text' placeholder='Enter mobile'
                                    changed={(event)=>{this.changedHandler(event)}} 
                                    />
                    
                        </div>

                    </div>

                    <div className='row'>

                        <div className='col-sm-6'>

                        <Input className="form-control" 
                                    inputId='terminalCode' label='Terminal Code' elementType='input' 
                                    type='text' placeholder=''
                                    style={{height:"50%"}}
                                    labelStyle={labelCommonStyleDual}
                                    // value={this.state.data['terminalCode']}
                                    changed={(event)=>{this.changedHandler(event)}} 
                                    /> 

                        </div>

                        <div className='col-sm-6'>

                            <Input className="form-control" 
                                            inputId='merchantCode' label='Merchant Code' elementType='input' 
                                            type='text' placeholder=''
                                            style={{height:"50%"}}
                                            labelStyle={labelCommonStyleDual}
                                            // value={this.state.data['merchantCode']}
                                            changed={(event)=>{this.changedHandler(event)}} 
                                            />
                        </div>

                        </div>

                    <div className='row'>
                        <div className='col col-sm ' >
                        
                        <Input inputId='transactionDate' label='Date' elementType='input' 
                                    type='date'  
                                    name='transactionDate'
                                    value={date}
                                    style={{maxWidth:'160px',margin:'1px', marginTop:'0px'}}
                                    labelStyle={labelCommonStyle}
                                    changed={(event)=>{this.changedHandler(event)}} 
                                    /> 
                                    <Input inputId='transactionTime' label='Time' elementType='input' 
                                    type='time' placeholder=''
                                    value={time}
                                    name='transactionTime'
                                    style={{maxWidth:'160px',margin:'1px', marginTop:'0px'}}
                                    labelStyle={labelCommonStyle}
                                    changed={(event)=>{this.changedHandler(event)}} 
                                    /> 
                                                    
                        </div>

                   
                        <div className='col col-sm ' >
                        
                        
                        </div>
                   </div>


                </form>

                {buttons}

                </Hoc>

        )

        
        return (
            <Hoc >

                 <Modal show={this.state.showModal}
                        errorModal={this.state.errorModal}
                        modalClosed={this.modalClosedHandler} >
                   <p>{this.state.modalMessage}</p>
                </Modal>

                
                {registerPage}

                {spinner}


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

export default connect(mapStateToProps,mapDispatchToProps)(RegisterPage);