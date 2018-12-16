import React from 'react'
import Hoc from '../../../hoc/hoc'
import './Nav.css'
import {NavLink} from 'react-router-dom'

const nav =() =>(
    <Hoc>
        <ul className='NavItem'>
            <li>
                <NavLink to='/transaction' >Transaction</NavLink>
            </li>
            <li>
                <NavLink to='/Registration' >Registration</NavLink>
            </li>
        </ul>
    </Hoc>
);      

export default nav;
