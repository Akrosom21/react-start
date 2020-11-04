import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {this.state.editMode
                    ?
                    <div className="status__field">
                        <input onBlur={this.deactivateEditMode} value={this.props.status} autoFocus={true} type="text"
                               className="status__input"/>
                    </div>
                    :
                    <div className="status__text">
                        <span onDoubleClick={this.activateEditMode} className="status__item">{this.props.status}</span>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus