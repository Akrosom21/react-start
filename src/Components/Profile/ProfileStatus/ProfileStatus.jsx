import React, {useEffect, useState} from "react";

function ProfileStatus(props) {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.profileStatus)

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    useEffect( () => {
        setStatus(props.profileStatus)
    }, [props.profileStatus])

    return (
        <>
            {editMode
                ?
                <div className="status__field">
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} value={status}
                           autoFocus={true} type="text"
                           className="status__input"/>
                </div>
                :
                <div className="status__text">
                    <span onDoubleClick={activateEditMode}
                          className="status__item">{props.profileStatus}</span>
                </div>
            }
        </>
    )
}


export default ProfileStatus