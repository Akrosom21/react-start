import React from 'react'

function Contacts(props) {

    return (
        <div>
            <b>{props.contactTitle}: </b>
            <span>{props.contactsValue}</span>
        </div>
    )
}

export default Contacts