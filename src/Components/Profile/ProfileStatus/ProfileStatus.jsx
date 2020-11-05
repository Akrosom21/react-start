import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.profileStatus
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
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.profileStatus !== this.props.profileStatus) {
            this.setState({
                status: this.props.profileStatus
            })
        }
    }

    render() {
        return (
            <>
                {this.state.editMode
                    ?
                    <div className="status__field">
                        <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status} autoFocus={true} type="text"
                               className="status__input"/>
                    </div>
                    :
                    <div className="status__text">
                        <span onDoubleClick={this.activateEditMode} className="status__item">{this.props.profileStatus}</span>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus