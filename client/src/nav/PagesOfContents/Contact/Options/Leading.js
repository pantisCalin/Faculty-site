import picture1 from "./picture1.jpg"
import picture2 from "./picture2.jpeg"

import BackBtn from "./BackBtn";

const Leading = ( {onClickContact} ) => {
    return (
    <div className = 'flexWithButton'>
        <div className = 'optionsLeading'>
                <div className = 'optionSquare'>
                <img data-aos = "fade-right" className = 'pictureLeading' src={picture1} alt = 'Facultylogo'/>
                        <div data-aos = "fade-in" className = 'functionTitle'>
                            <div>Decan</div>
                        <div className = 'descr'>
                            <div  className = 'fullRow'>
                                <div className = 'opt'>Grade:</div>  
                                <div className = 'text'>Ing.Prof.Dr.</div>
                            </div>
                            <div className = 'fullRow'>
                                <div className = 'opt'>Name:</div>
                                 <div className = 'text'>John Doe</div>
                            </div>
                            <div className = 'fullRow'>
                                <div className = 'opt'> Email: </div> 
                                <div className = 'email'>lucian@solid.fizica.unibuc.ro</div>
                            </div>
                        </div>
                     </div>
                </div>
                <div className = 'optionSquare'>
                <img data-aos = "fade-right" className = 'pictureLeading' src={picture2} alt = 'Facultylogo'/>
                        <div  data-aos = "fade-in"className = 'functionTitle'>
                        <div>Prodecan</div>
                        <div className = 'descr'>
                            <div  className = 'fullRow'>
                                <div className = 'opt'>Grade:</div>  
                                <div className = 'text'>Ing.Lecturer.Dr.</div>
                            </div>
                            <div className = 'fullRow'>
                                <div className = 'opt'>Name:</div>
                                 <div className = 'text'>John Doe (but female)</div>
                            </div>
                            <div className = 'fullRow'>
                                <div className = 'opt'> Email: </div> 
                                <div className = 'email'>lucian@solid.fizica.unibuc.ro</div>
                            </div>
                        </div>
                     </div>
                </div>
                <div className = 'optionSquare'>
                <img data-aos = "fade-right" className = 'pictureLeading' src={picture1} alt = 'Facultylogo'/>
                        <div data-aos = "fade-in"  className = 'functionTitle'>
                        <div>Prodecan</div>
                        <div className = 'descr'>
                            <div  className = 'fullRow'>
                                <div className = 'opt'>Grade:</div>  
                                <div className = 'text'>Dr.</div>
                            </div>
                            <div className = 'fullRow'>
                                <div className = 'opt'>Name:</div>
                                 <div className = 'text'>John Doe</div>
                            </div>
                            <div className = 'fullRow'>
                                <div className = 'opt'> Email: </div> 
                                <div className = 'email'>lucian@solid.fizica.unibuc.ro</div>
                            </div>
                        </div>
                     </div>
                </div>
                
            </div>
                <BackBtn onClickContact = {onClickContact}/>

            
        </div>
    )
}

export default Leading
