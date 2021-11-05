import React from 'react'
import imageFac from './../../../FacultyImage.jpeg'; 
import ExploreMore
 from './ExploreMore';
const OnImage = () => {
    return (
        <div data-aos = "fade-in" className = 'bigImage' style={{ backgroundImage: `url(${imageFac})`  }}>
        <div className = ' darkDiv'>
            <div data-aos = "fade-in" className = ' divMagurele'>
                 Măgurele Bucharest
            </div>
            <div data-aos = "fade-right" className = ' divMagureleDescription'>
                 BIGGEST RESEARCH PLATFORM IN ROMANIA
            </div>

            <ExploreMore />

        </div>
        </div>
    )
}

export default OnImage
