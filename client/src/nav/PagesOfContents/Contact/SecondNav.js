import React from 'react'
import { BsMailbox } from 'react-icons/bs';
import { FaFax } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

const SecondNav = ({onClick1, onClick2, onClick3 }) => {

    return (
        <div data-aos = "fade-in">
        <div className = 'secondNav'>
            <div className = "secondNavOption" onClick = {onClick1}> <BsMailbox/>  </div>
            <div className = "secondNavOption" onClick = {onClick2}> <FiPhoneCall/>  </div>
            <div className = "secondNavOption" onClick = {onClick3}> <FaFax/> </div>
        </div>
        </div>
    )
}

export default SecondNav
