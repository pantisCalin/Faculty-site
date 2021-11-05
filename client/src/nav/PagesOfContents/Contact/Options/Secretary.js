import picture1 from "./picture1.jpg"
import picture2 from "./picture2.jpeg"
import BackBtn from "./BackBtn"

const Secretary = ( {onClickContact} ) => {
    return (
    <div className = 'flexWithButton'>
        <div className = 'optionsLeading'>
                <div className = 'optionSquare'>
                <img data-aos = "fade-right" className = 'pictureLeading' src={picture1} alt = 'Facultylogo'/>
                        <div data-aos = "fade-in" className = 'functionTitle'>
                            <div>Secretary Chief</div>
                        <div className = 'descr'>
                            <div className = 'fullRow'>
                                <div className = 'opt'>Name:</div>
                                 <div className = 'text'>Gabriela Nitulescu</div>
                            </div>
                            <div className = 'fullRow'>
                                <div className = 'opt'> Phone: </div> 
                                <div className = 'text'>021 457 45 21</div>
                            </div>
                            <div className = 'fullRow'>
                                <div className = 'opt'> Email: </div> 
                                <div onClick={() =>  navigator.clipboard.writeText('gabriela.nitulescu@fizica.unibuc.ro')} 
                                className = 'email'>gabriela.nitulescu@fizica.unibuc.ro</div>
                            </div>
                           
                        </div>
                     </div>
                </div>
                <div className = 'optionSquare'>
                <img data-aos = "fade-right" className = 'pictureLeading' src={picture2} alt = 'Facultylogo'/>
                <div data-aos = "fade-in" className = 'functionTitle'>
                            <div>Secretary</div>
                        <div className = 'descr'>
                            <div className = 'fullRow'>
                                <div className = 'opt'>Name:</div>
                                 <div className = 'text'>Annelize Kosinski</div>
                            </div>
                            <div className = 'fullRow'>
                                <div className = 'opt'> Phone: </div> 
                                <div className = 'text'>021 305 97 75</div>
                            </div>
                            <div className = 'fullRow'>
                                <div className = 'opt'> Email: </div> 
                                <div 
                                onClick={() =>  navigator.clipboard.writeText('annelize.kosinski@fizica.unibuc.ro')} 
                                className = 'email'>annelize.kosinski@fizica.unibuc.ro</div>
                            </div>
                           
                        </div>
                     </div>
                </div>
                <div className = 'optionSquare'>
                <img data-aos = "fade-right" className = 'pictureLeading' src={picture1} alt = 'Facultylogo'/>
                <div data-aos = "fade-in" className = 'functionTitle'>
                            <div>Secretary</div>
                        <div className = 'descr'>
                            <div className = 'fullRow'>
                                <div className = 'opt'>Name:</div>
                                 <div className = 'text'>Marina Aldea</div>
                            </div>
                            <div className = 'fullRow'>
                                <div className = 'opt'> Phone: </div> 
                                <div className = 'text'>021 457 44 19</div>
                            </div>
                            <div className = 'fullRow'>
                                <div className = 'opt'> Email: </div> 
                                <div onClick={() =>  navigator.clipboard.writeText('marina.aldea@fizica.unibuc.ro')} className = 'email'>marina.aldea@fizica.unibuc.ro</div>
                            </div>
                           
                        </div>
                     </div>
                </div>
                
            </div> 
            <BackBtn onClickContact = {onClickContact}/>
        </div>
    )
}

export default Secretary
