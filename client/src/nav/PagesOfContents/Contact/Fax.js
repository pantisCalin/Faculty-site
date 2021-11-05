import React from 'react'

const Fax = ( {onClick0} ) => {
    return (
        <div className = 'popUpBackground' data-aos = "fade-in">
           <div className = 'popUp' >
               <div className = 'popUpTitle'>
                    <div>Fax</div>
                    <div className = 'xPopUp' onClick = {onClick0}>x</div>
               </div>
               
               <div className = 'popUpDescription'>
               <h3>
                        Central
                    </h3>
                    <p>
                    +4 021 457 4521
                    </p>
                    <h3>
                        Decan
                    </h3>
                    <p>
                    +4 021 457 4418 
                    </p>
               </div>
            </div>
        </div>
    )
}

export default Fax
