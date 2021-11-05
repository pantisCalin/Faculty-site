import React from 'react'
import { useState } from 'react'
import ThisForm from './ThisForm';

const AddNews = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <button className = 'addNewsBtn' onClick = {() => setShow(!show)}> ADD NEWS </button>
            {show && <ThisForm/>}
        </div>
    )
}

export default AddNews
