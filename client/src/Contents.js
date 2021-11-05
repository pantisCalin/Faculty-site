import Admission from "./nav/PagesOfContents/Admission/Admission.js"
import Contact from "./nav/PagesOfContents/Contact/Contact.js"
import Events from "./nav/PagesOfContents/Events/Events.js"
import Home from "./nav/PagesOfContents/Home/Home.js"
import Mobility from "./nav/PagesOfContents/Mobility/Mobility.js"
import News from "./nav/PagesOfContents/News/News.js"
import Presentation from "./nav/PagesOfContents/Presentation/Presentation.js"
import Research from "./nav/PagesOfContents/Research/Research.js"
import Studies from "./nav/PagesOfContents/Studies/Studies.js"
import Scholarships from "./nav/PagesOfContents/Scholarships/Scholarships.js"
import Students from "./nav/PagesOfContents/Students/Students.js"
import { Route } from 'react-router-dom'
import Login from "./nav/PagesOfContents/Login/Login.js"

const Contents = ( ) => {
    return (
        <div className = "textSpace">
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/news" component = {News} />
            <Route exact path = "/presentation" component = {Presentation} />
            <Route exact path = "/studies" component = {Studies} />
            <Route exact path = "/scholarships" component = {Scholarships} />
            <Route exact path = "/admission" component = {Admission} />
            <Route exact path = "/research" component = {Research} />
            <Route exact path = "/mobility" component = {Mobility} />
            <Route exact path = "/events" component = {Events} />
            <Route exact path = "/students" component = {Students} />
            <Route exact path = "/contact" component = {Contact} />
            <Route exact path = "/login" component = {Login} />
        </div>
    )
}

export default Contents
