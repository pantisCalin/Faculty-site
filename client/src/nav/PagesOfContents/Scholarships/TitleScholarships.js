import React from 'react'
import logo from './../../../FacultyOfPhysics.jpeg'; 
import Aos from "aos";



const TitleScholarships = () => {

 Aos.init({duration: 1000})

      
    return (
        <div className = 'titleDiv'>
            <div className = 'writtenInTitle'>
                <div className = 'titlePage'  ><div data-aos = "fade-right">Scholarships </div>
                    <img data-aos = "fade-left" className = 'facultyOfPhysicsSmall' src={logo} alt = 'Facultylogo'/></div>
                <p data-aos = "fade-right" className = 'writtenUnder'>Find out the latest information available on this page. Spread the information across your comunity once you find relevant and of interest news that can be helpful for other faculty menmbers or your friends </p>
            </div>
            <img data-aos = "fade-left" className = 'facultyOfPhysicsBig' src={logo} alt = 'Facultylogo'/>
        </div>
    )
}

export default TitleScholarships
