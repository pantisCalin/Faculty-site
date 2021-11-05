import Menu from "./nav/Menu/Menu.js";
import Button from "./nav/Menu/Button.js";
import { ImSearch } from "react-icons/im";
import { MdOutlineLanguage } from "react-icons/md";


export const Header = ( {onClick, howMenuPopUp} ) => {
    return (
        <div className = "header">
            <div className = 'leftCornerButton'>
                <div className = 'smallNav'>
                    <Button  onClick = {onClick}/>
                    <div className = 'rightMenu  onSmall'>
                        <div className = 'langButton'><MdOutlineLanguage/></div>
                        <div className = 'searchButton'><ImSearch/></div>
                    </div>
                </div>
            {howMenuPopUp && <Menu onClick = {onClick} howMenuPopUp={howMenuPopUp}/>}
           
            </div>

            <div className = 'navigationBar'>
                <Menu/>
                <div className = 'rightMenu  onBig'>
                    <div className = 'langButton'><MdOutlineLanguage/></div>
                    <div className = 'searchButton'><ImSearch/></div>
                </div>
            </div>
         
        </div>
    )
}
