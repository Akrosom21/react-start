import React, {useEffect} from "react";
import classes from "../ProfileInfo/ProfileInfo.module.css";
import {Field, Form} from "react-final-form";

function ProfileDescriptionForm(props) {
    const contact = Object.keys(props.profile.contacts).map(key =>
        <div key={key}>
            {key}:<Field name={'contacts.' + key} initialValue={props.profile.contacts[key]}>
            {({input, meta}) => (
                <div>
                    <input className={meta.error && meta.touched && 'error'} {...input} type="text"/>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
            )}
        </Field>
        </div>)
    const onSubmit = (values) => {
        props.changeProfile(values)
            props.editProfile(false)
    }
    return (

        <>
            <Form onSubmit={onSubmit}
                  validate={values => {
                      const errors = {}
                      if (!values.fullName) {
                          errors.fullName = 'Required'
                      } else if (!values.aboutMe) {
                          errors.aboutMe = 'Required'
                      }
                      return errors
                  }}
                  render={({handleSubmit, form, submitting, pristine, values}) => (
                      <form onSubmit={handleSubmit}>
                          <div>
                              <Field name='fullName' initialValue={props.profile.fullName}>
                                  {({input, meta}) => (
                                      <div>
                                          <span>Full name</span>
                                          <input {...input} type="text"/>
                                          {meta.error && meta.touched && <span>{meta.error}</span>}
                                      </div>
                                  )}
                              </Field>
                          </div>
                          <div>
                              <Field name='aboutMe' initialValue={props.profile.aboutMe}>
                                  {({input, meta}) => (
                                      <div>
                                          <span>About me</span>
                                          <input {...input} type="text"/>
                                          {meta.error && meta.touched && <span>{meta.error}</span>}
                                      </div>
                                  )}
                              </Field>
                          </div>
                          <div>
                              <Field name='lookingForAJob' type='checkbox' component='input'/> Looking for a job
                          </div>
                          <div>
                              <Field name='lookingForAJobDescription'
                                     initialValue={props.profile.lookingForAJobDescription}>
                                  {({input, meta}) => (
                                      <div>
                                          <span>Looking for a job description</span>
                                          <textarea {...input} type="text"/>
                                          {meta.error && meta.touched && <span>{meta.error}</span>}
                                      </div>
                                  )}
                              </Field>
                          </div>
                          {contact}
                          <button type='submit'>SAVE</button>
                      </form>
                  )

                  }

            />
        </>


        // <div className={classes.profile__desc}>
        //     <div className={classes.profile__name}>{props.profile.fullName}</div>
        //     <div className={classes.profile__desc_text}>
        //         <b>About Me:</b> <span>{props.profile.aboutMe}</span>
        //     </div>
        //     <div className={classes.profile__desc_text}>
        //         <b>Looking for a job:</b> <span>{props.profile.lookingForAJob ? 'Yes' : 'No'}</span>
        //     </div>
        //     <div className={classes.profile__desc_text}>
        //         <b>Looking for a job description:</b> <span>{props.profile.lookingForAJobDescription}</span>
        //     </div>
        //     <div className={classes.profile__desc_text}>
        //         <b>Contacts:</b> {contact}
        //     </div>
        // </div>
    )
}

export default ProfileDescriptionForm