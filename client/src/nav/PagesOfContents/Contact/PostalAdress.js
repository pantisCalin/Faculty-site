import React from 'react'

const PostalAdress = ( {onClick0} ) => {
    return (
        <div className = 'popUpBackground' data-aos = "fade-in">
        <div className = 'popUp' >
            <div className = 'popUpTitle'>
                 <div>Postal Adress</div>
                 <div className = 'xPopUp' onClick = {onClick0}>x</div>
            </div>
            
            <div className = 'popUpDescription'>
            <p className = 'text'>CP MG - 11, Bucuresti-Magurele <br /> RO - 077125</p>
            </div>
         </div>
     </div>
    )
}

export default PostalAdress
