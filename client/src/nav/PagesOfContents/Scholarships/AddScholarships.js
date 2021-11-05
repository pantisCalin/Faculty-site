import React from 'react'
import { useState } from 'react'
import ThisForm from './ThisForm';

const AddScholarships = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <button className = 'addNewsBtn' onClick = {() => setShow(!show)}> ADD SCHOLLARSHIP INFO </button>
            {show && <ThisForm/>}
        </div>
    )
}

export default AddScholarships
