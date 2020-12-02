import React, {FC, useEffect, useState} from "react";

type propsType = {
    profileStatus: string
    updateStatus: (status: string) => void
}

const ProfileStatus: FC<propsType> = (props) => {
    let [editMode, setEditMode] = useState<boolean>(false)
    let [status, setStatus] = useState<string>(props.profileStatus)

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
                    <b>Status: </b>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} value={status}
                           autoFocus={true} type="text"
                           className="status__input"/>
                </div>
                :
                <div className="status__text">
                    <b>Status: </b>
                    <span onDoubleClick={activateEditMode}
                          className="status__item">{props.profileStatus}</span>
                </div>
            }
        </>
    )
}


export default ProfileStatus