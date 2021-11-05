import React from 'react'
import {Link} from 'react-router-dom'

const ExploreMore = () => {
    return (
        <div data-aos = "fade-up">
           <Link to = "/presentation" className = "linkContact"> 
            <button  className = "homeExplore">EXPLORE MORE</button>
            </Link>
        </div>
    )
}

export default ExploreMore
