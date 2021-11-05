import { AiOutlineContacts } from 'react-icons/ai';

const BackBtn = ( {onClickContact} ) => {
    return (
        <button onClick = {onClickContact} className = 'btnGoBack'>
                <div className = 'buttonContactsText'>Go back to <br />Contacts</div>
                    <div className = 'buttonContactsHover'> 
                        <AiOutlineContacts/>  
                        <div className = 'smallContacts'>Contacts</div>
                    </div>
            </button>
    )
}

export default BackBtn
