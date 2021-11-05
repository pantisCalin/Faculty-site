import Aos from "aos";
import { useState } from 'react'
import TitleContacts from './TitleContacts';
import ThreeOptionsContact from "./ThreeOptionsContact";
import PostalAdress from "./PostalAdress";
import Phone from "./Phone";
import Fax from "./Fax";
import Leading from "./Options/Leading";
import Secretary from "./Options/Secretary";
import Erasmus from "./Options/Erasmus";


const Contact = () => {
const [isOpen, setIsOpen] = useState('0')
const [fileOpened, setFileOpened] = useState('0')
Aos.init({duration: 500})


    return (
        <div className = 'containerContact'>
            <TitleContacts 
            titleState = {fileOpened}
            onClick1 = {() => setIsOpen('1')}
            onClick2 = {() => setIsOpen('2')}
            onClick3 = {() => setIsOpen('3')}
            />
            {fileOpened === '0' && <ThreeOptionsContact 
            goSecretary = {() => {setFileOpened('1')}}
            goLeading = {() => {setFileOpened('2')}}
            goErasmus = {() => {setFileOpened('3')}}
            />}
            {fileOpened === '1' &&<Secretary
             onClickContact = {() => setFileOpened('0')}
            />}
            {fileOpened === '2' &&<Leading
             onClickContact = {() => setFileOpened('0')}
            />}
            {fileOpened === '3' &&<Erasmus
             onClickContact = {() => setFileOpened('0')}
            />}

            
        {isOpen === '1' && <PostalAdress onClick0 = {() => setIsOpen('0')}/>}
        {isOpen === '2' &&<Phone onClick0 = {() => setIsOpen('0')}/>}
        {isOpen === '3' && <Fax onClick0 = {() => setIsOpen('0')}/>}

     
        </div>
    )
}

export default Contact
