import React from 'react'
import Hoc from '../../hoc/hoc'
import './input.css'

const input = ( props ) => {
    let inputElement = null;
    const card=[1,2,3,4];

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = (
               
                <div className="form-group no-gutters row">
                
                    <label style ={props.labelStyle} htmlFor={props.inputId} className=' col-md-3'>
                        {props.label}
                    </label>

                    <input className="form-control col-md-9"
                        type={props.type}
                        style={props.style}
                        id={props.inputId}
                        name={props.inputId}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.changed} />
                </div>
            )


            break;

            case ( 'mobile' ):
            inputElement = (
               
                <div className="form-group no-gutters row">
                
                    <label style ={props.labelStyle} htmlFor={props.inputId} className=' col-md-3'>
                        {props.label}
                    </label>

                    <input className="form-control col-md-9"
                        type={props.type}
                        style={props.style}
                        id={props.inputId}
                        name={props.inputId}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.changed}
                        maxLength="11" />
                </div>
            )


            break;

        case ( 'textarea' ):
            inputElement = (
                <Hoc>
                    <label style={props.labelStyle}>{props.label}</label>
                    <textarea
                        className="form-control"
                        // style={props.style}
                        id={props.inputId}
                        name={props.inputId}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.changed} />
                </Hoc>);
            break;

            // case ('cardd'):
            // inputElement=   <div className='row'>
            //                     <div className='col'>
            //                     <input type={props.type}
            //                     className="form-control"
            //                     style={props.style}
            //                     id={props.inputId}
            //                     placeholder={props.placeholder}
            //                     value={props.value}
            //                     onChange={props.changed} />
            //                     </div>
            //                     <div className='col'>
                                
            //                     <input type={props.type}
            //                     className="form-control"
            //                     style={props.style}
            //                     id={props.inputId+'1'}
            //                     placeholder={props.placeholder}
            //                     value={props.value}
            //                     onChange={props.changed} />
            //                     </div>
            //                     <div className='col'>
                                
            //                     <input type={props.type}
            //                     className="form-control"
            //                     style={props.style}
            //                     id={props.inputId+'2'}
            //                     placeholder={props.placeholder}
            //                     value={props.value}
            //                     onChange={props.changed} />
            //                     </div>
            //                     <div className='col'>
                                
            //                     <input type={props.type}
            //                     className="form-control"
            //                     style={props.style}
            //                     id={props.inputId+'3'}
            //                     placeholder={props.placeholder}
            //                     value={props.value}
            //                     onChange={props.changed} />
            //                  </div>
            //                 </div>
            //     break;

            case ('card'):
                inputElement=   
                <div className='row no-gutters justify-content-around' >
                    <div className='col-lg'>
                        <label style={props.labelStyle}>{props.label}</label>
                    </div>
                    {card.map(igkey=>{
                        return ( 
                            <div key={igkey} className='col-12 col-sm col-lg ' style={{margin:'0px' , padding:'0px'}}>
                                <input type=''
                                    className="form-control"
                                    style={props.style}
                                    id={props.inputId+igkey}
                                    name={props.inputId+igkey}
                                    placeholder={props.placeholder}
                                    value={props.value}
                                    onChange={props.changed} 
                                    // pattern="\d4" 

                                    maxLength="8"
                                    required/>
                            </div>)
                    })}
                </div>


                break;

        case ( 'select' ):
            inputElement = (
                <Hoc>
                    <label style={props.labelStyle}>{props.label}</label>
                    <select
                        value={props.value}
                        onChange={props.changed}
                        name={props.inputId}>
                        {props.elementConfig.options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.displayValue}
                            </option>
                        ))}
                    </select>
                </Hoc>
            );
            break;

            // case ( 'date' ):
            // inputElement = (
            //     <Hoc>
            //         <label style={props.labelStyle}>{props.label}</label>
            //         <input type="date" 
            //             className="form-control"
            //             style={props.style}
            //             id={props.inputId}
            //             name={props.inputId}
            //             type={props.type}
            //             placeholder={props.placeholder}
            //             value={props.value}
            //             onChange={props.changed} 
            //             name="transactionDate"></input>
            //     </Hoc>
            // );
            // break;
            
        default:
        // inputElement = (
        //     <Hoc>
        //         <label style={props.labelStyle}>{props.label}</label>
        //         <input
        //             className="form-control"
        //             style={props.style}
        //             id={props.inputId}
        //             name={props.inputId}
        //             type={props.type}
        //             placeholder={props.placeholder}
        //             value={props.value}
        //             onChange={props.changed} />
        //     </Hoc>)
    }

    return (
        <Hoc>
            {inputElement}
        </Hoc>
    );

};
export default input