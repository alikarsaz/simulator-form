import React,{Component} from 'react'
import './Layout.css'
import Toolbar from '../../Components/Toolbar/Toolbar'
import Hoc from '../../hoc/hoc'
import FirstPage from '../FirstPage/FirstPage'
// import RegisterPage from '../RegisterPage/RegisterPage'
import Logo from '../../Components/Logo/Logo'
import {Route, Switch, Redirect} from 'react-router-dom'
import asyncComponent from '../../asyncComponent'

const asyncRegisterPage= asyncComponent(()=>{
    return import('../RegisterPage/RegisterPage')
});


class Layout extends Component {
    render () {
        return (
            <div>
            <Hoc >
           

                <div className = 'row align-items-center no-gutters justify-content-center'>

                    <div className='col-1 text-center  '>
                        <Logo/>
                    </div>
                    
                    <div className='col-11 text-center mainHeader m-0'>Sana Simulator</div>
                </div>

                <div className='w-100'></div>
                
                <div >
                    <Toolbar />
                </div>  

                <div className='row  justify-content-center'>
                    <div className='col-12 border layoutMain text-center'>
                        <Switch>
                            <Route path="/transaction"  component={FirstPage} />
                            <Route path="/registration" component={asyncRegisterPage} />
                            <Redirect from='/' to="/transaction" />

                        </Switch>
                    </div>
                </div>


            </Hoc>
            </div>
        );
    }
}

export default Layout