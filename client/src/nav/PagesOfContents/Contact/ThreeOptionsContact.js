import React from 'react'
import secretary from './secretary.jpg'; 
import leader from './leader.jpg'; 
import erasmus from './erasmus.jpg'; 

const ThreeOptionsContact = ( {goSecretary, goLeading, goErasmus} ) => {
    const txt = ' Fell free to ask any question you want. Additional information may be found here. Find out new information that may be useful to you and your friends. Do not hesitate to write us, we are open to answer your questions'

    return (
        <div className = 'optionsContacts'>
                <div data-aos = "fade-right" onClick = {goSecretary}>
                    <div  className = "squareOption">
                        <img className = 'squareOptionImage secretary' src={secretary} alt = 'Secretary'/>
                        <div className = "squareOptionText">
                             {txt}
                        </div>
                        <div className = "squareOptionTitle">
                            Secretary
                        </div>
                    </div>
                 </div>
               
                    
                 <div data-aos = "fade-down"  onClick = {goLeading}>
                    <div className = "squareOption">
                        <div className = "squareOptionImage">
                             <img className = 'squareOptionImage secretary' src={leader} alt = 'Leader'/>
                        </div>
                        <div className = "squareOptionText">
                            {txt}
                        </div>
                        <div className = "squareOptionTitle">
                            Leading
                        </div>
                  </div>
                </div>     
                <div data-aos = "fade-left"  onClick = {goErasmus}>
                    <div  className = "squareOption">
                        <div className = "squareOptionImage">
                             <img className = 'squareOptionImage secretary' src={erasmus} alt = 'Erasmus'/>
                        </div>
                         <div className = "squareOptionText">
                            {txt}
                        </div>
                        <div className = "squareOptionTitle">
                            Erasmus
                        </div>
                        
                    </div>     
                </div>
                
            </div>
    )
}

export default ThreeOptionsContact
