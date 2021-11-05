import React from 'react'
import logo from './../../../Logo-UB.jpg'; 
import SecondNav from './SecondNav';

const TitleContacts = ( {onClick1, onClick2, onClick3, titleState } ) => {
        var titleUp = 'Contacts'
        switch (titleState) {
            case '1':
                 titleUp = "Secretary"
             break;
            case '2':
               titleUp = "Leading"
                break;
            case '3':
                titleUp = "Erasmus"
                break;
            default:
               titleUp = "Contacts"
                break;
          }                          
    return (
        <div className = 'titleContacts'>
                <div className = 'titlePage contactFlex' data-aos = "fade-right" > 
                    <div>
                       {titleUp}
                    </div>
                    <div>
                        <SecondNav 
                        onClick1 = {onClick1}
                        onClick2 = {onClick2}
                        onClick3= {onClick3}
                        />
                    </div>
                </div>
                
                    <img data-aos = "fade-left" className = 'UBLogo' src={logo} alt = 'Facultylogo'/>
                
            </div>
    )
}

export default TitleContacts
