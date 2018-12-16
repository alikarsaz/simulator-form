import React from 'react'
import './Logo.css'
import logoImage from '../../Assets/Images/sana-logo.png'

const logo=() =>(
    <div className='Logo' >
        <img src={logoImage} alt='Sana Logo' />
    </div>
)

export default logo;
