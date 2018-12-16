import React, {Component} from 'react'
import './Modal.css'
import Backdrop from '../Backdrop/Backdrop'
import Hoc from '../../hoc/hoc'


class Modal extends Component {

    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show!==this.props.show || nextProps.children!==this.props.children
    }

    render(){

        const nextModalClass=['Modal'];
        
        if (!this.props.errorModal) nextModalClass.push('text-primary')
        else  nextModalClass.push('text-danger')

        const modalClass= nextModalClass.join(' ');

        return(
            <Hoc>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={modalClass}
                    style={{
                        transform:this.props.show ? 'translateY(0)' : 'translateY(-100vh)' ,
                        opacity:this.props.show ? '1' : '0',
                        borderRadius:'15px',}}>

                        {this.props.children}         

                </div>
            </Hoc>

    );
}
}

export default Modal;
