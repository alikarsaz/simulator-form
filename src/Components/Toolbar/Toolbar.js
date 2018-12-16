import React from 'react'
import Nav from './Nav/Nav'
import './Toolbar.css'

const toolbar =() => (
    <div className='row Toolbar justify-content-center'>
        
        <nav className='col  text-center '>
            <Nav />
        </nav>
    </div>
);

export default toolbar;