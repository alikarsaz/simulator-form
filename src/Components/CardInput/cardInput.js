import React from "react"
import Hoc from '../../hoc/hoc'

const cardInput =(props)=>{


    // const card1 = props.currentCard.slice(0,4)
    // const card2 = props.currentCard.slice(4,8)
    // const card3 = props.currentCard.slice(8,12)
    // const card4 = props.currentCard.slice(12)

    const inputElement= (
        <Hoc>

            <div className='row ' >

                    <div className='col-md-2' style={props.labelStyle}>
                        <label >{props.label}</label>
                    </div>

                    <div className='col-12 col-md-10'>
                    <div className='row no-gutters'>
                    
                        <div className='pl-1 pt-1 col-6 col-sm-3 '>
                        
                        <input type='text'
                            className="form-control"
                            style={props.style}
                            id={props.inputId+'1'}
                            placeholder={props.placeholder}
                            value={props.value}
                            onChange={props.changed} 
                            onPaste={props.pasted}
                            maxLength="4"
                            required/>
                        </div>

                        <div className='pl-1 pt-1 col-6 col-sm-3 '>
                        
                        <input type='text'
                            className="form-control"
                            style={props.style}
                            id={props.inputId+'2'}
                            placeholder={props.placeholder}
                            value={props.value}
                            onChange={props.changed} 
                            maxLength="4"
                            required/>
                        </div>

                        <div className='pl-1 pt-1 col-6 col-sm-3 '>
                        
                        <input type='text'
                        className="form-control"
                        style={props.style}
                        id={props.inputId+'3'}
                        placeholder={props.placeholder}

                        value={props.value}
                        onChange={props.changed} 
                        maxLength="4"
                        required/>
                        </div>

                        <div className='pl-1 pt-1  col-6 col-sm-3 '>
                            <input type='text'
                                className="form-control"
                                style={props.style}
                                id={props.inputId+'4'}
                                placeholder={props.placeholder}
                                value={props.value}
                                onChange={props.changed} 
                                maxLength="4"
                                required/>
                    </div>


                    </div>
                    </div>
            </div>
        </Hoc>
                                )

    return (
           <Hoc>
               {inputElement}
           </Hoc>
    )
}

export default cardInput;