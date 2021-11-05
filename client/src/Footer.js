import React from 'react'
import {Link} from 'react-router-dom'
import UBLOGO from './Logo-UB.jpg'
import { BsFacebook, BsInstagram } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className = 'containerFooter'>
            <div className = 'textFooter'>
           
                <div className = 'ulFooter'>
                <h1 className = 'titleFooter'>Explore</h1>
                <Link to = "/" className = "linkFooter" > Home </Link>
            <Link to = "/news" className = "linkFooter"> News </Link>
            <Link to = "/research" className = "linkFooter"> Research </Link>
            <Link to = "/mobility" className = "linkFooter"> Mobility </Link> 
            <Link to = "/students" className = "linkFooter">Students</Link>
            <Link to = "/contact" className = "linkFooter">Contact</Link>
                </div>
                <div className = 'ulFooter'>
                <h1 className = 'titleFooter'>About</h1>
    
            <Link to = "/presentation" className = "linkFooter"> Presentation</Link>
            <Link to = "/studies" className = "linkFooter"> Studies </Link>
            <Link to = "/scholarships" className = "linkFooter"> Scholarships </Link>
            <Link to = "/admission" className = "linkFooter"> Admission</Link>
            <Link to = "/events" className = "linkFooter">Events</Link>

                </div>
                <div className = 'ulFooter'>
                <h1 className = 'titleFooter'>Login</h1>
            <Link to = "/login" className = "linkFooter">Login</Link>
                </div>
                <div className = 'footerLastRow'>
                    <img data-aos = "fade-left" className = 'UBLogo' src={UBLOGO} alt = 'Facultylogo'/>
                    <h1 className = 'titleFooter'>Visit us on:</h1> 
                    <div className = 'icons'> <BsFacebook style = {{color:'blue'}}/> <BsInstagram/></div>

                </div>
            </div>
            <div className = 'border'></div>
            
            <div className = 'copyRight'>© Faculty of Physics - University of Bucharest ... Pantis Calin</div>
        </div>
    )
}

export default Footer
