import React from 'react'

const Phone = ( {onClick0} ) => {
    return (
        <div className = 'popUpBackground' data-aos = "fade-in">
           <div className = 'popUp' >
               <div className = 'popUpTitle'>
                    <div>Phone</div>
                    <div className = 'xPopUp' onClick = {onClick0}>x</div>
               </div>
               
               <div className = 'popUpDescription'>
                    <h3>
                        Central
                    </h3>
                    <p>
                    +4 021 457 4949
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

export default Phone
