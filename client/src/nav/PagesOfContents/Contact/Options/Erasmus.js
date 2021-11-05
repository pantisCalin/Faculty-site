import picture2 from "./picture2.jpeg"
import BackBtn from "./BackBtn"

const Erasmus = ( {onClickContact} ) => {
    return (
    <div className = 'flexWithButton'>
        <div className = 'optionsLeading'>
                <div className = 'optionSquare'>
                <img data-aos = "fade-right" className = 'pictureLeading' src={picture2} alt = 'Facultylogo'/>
                        <div data-aos = "fade-in" className = 'functionTitle'>
                            <div>Coordinator Chief</div>
                        <div className = 'descr'>
                            <div  className = 'fullRow'>
                                <div className = 'opt'>Grade:</div>  
                                <div className = 'text'>Lect.Univ.Dr</div>
                            </div>
                            <div className = 'fullRow'>
                                <div className = 'opt'>Name:</div>
                                 <div className = 'text'>Sorina Iftimie</div>
                            </div>
                            <div className = 'fullRow'>
                                <div className = 'opt'> Email: </div> 
                                <div className = 'email'>sorina.iftimie@fizica.unibuc.ro</div>
                            </div>
                        </div>
                     </div>
                </div> 
            </div>
            <BackBtn onClickContact = {onClickContact}/>
        </div>
    )
}

export default Erasmus

