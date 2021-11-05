import React from 'react'
import logo from './../../../FacultyOfPhysics.jpeg'; 
import ublogo from './../../../Logo-UB.jpg'; 

const Logo = () => {
    return (
        <div className = "containerAllLogo">
            <div className = "containerLogo">
                <div data-aos = "fade-right" className = 'PhysicsFaculty'>
                    <img className = 'facultyLogo' src={logo} alt = 'Facultylogo'/>
                    <div>
                        <div className = 'facultyTitle'>Faculty of Physics</div>
                         <div className = 'facultyDescription'>PRIMIRY FACULTY FROM ROMANIA  </div>
                    </div>
                </div>
                
                <img data-aos = "fade-left" className = 'UBLogo' src={ublogo} alt = 'Facultylogo'/>
            </div>
        </div>
    )
}

export default Logo
