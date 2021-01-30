import React from "react";
import {Field, Form} from "react-final-form";

function UserFilter(props) {
    const onSubmit = (values) => {
        props.getUsersPage(1, props.usersInPage, values.user);
    }
    return (
        <>
            <Form onSubmit={onSubmit}
                  render={({handleSubmit, form, submitting, pristine, values}) => (
                      <form onSubmit={handleSubmit}>
                          <div>
                              <Field name='user'>
                                  {({input, meta}) => (
                                      <div>
                                          <input {...input}
                                                 type="text" placeholder="type name"/>
                                          {meta.error && meta.touched && <span>{meta.error}</span>}
                                      </div>
                                  )}
                              </Field>
                          </div>
                          <button type='submit'>SEARCH</button>
                      </form>
                  )
                  }
                  />
        </>
    )
}

export default UserFilter