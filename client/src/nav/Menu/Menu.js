
import {Link} from 'react-router-dom'
import {animated, useSpring} from "react-spring";

const Menu = ( {onClick, howMenuPopUp} ) => {
    
    const anim = useSpring({
        from: { opacity:0},
        to:{opacity:1},
        config: { duration: 300 },
      })
        
    return (
        <div className = 'menu' onClick = {onClick}>
        <animated.ul  style = {anim}>
            <Link to = "/" className = "link" > Home </Link>
            <Link to = "/news" className = "link"> News </Link>
            <Link to = "/presentation" className = "link"> Presentation</Link>
            <Link to = "/studies" className = "link"> Studies </Link>
            <Link to = "/scholarships" className = "link"> Scholarships </Link>
            <Link to = "/research" className = "link"> Research </Link>
            <Link to = "/admission" className = "link"> Admission</Link>
            <Link to = "/mobility" className = "link"> Mobility </Link> 
            <Link to = "/events" className = "link">Events</Link>
            <Link to = "/students" className = "link">Students</Link>
            <Link to = "/contact" className = "link">Contact</Link>
            <Link to = "/login" className = "link">Login</Link>
        </animated.ul>
        </div>
    )
}

export default Menu
