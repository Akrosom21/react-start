import React from "react";
import {Form, Field} from 'react-final-form'

function LoginForm(props) {
    const onSubmit = (values) => {
        props.login(values.email, values.password, values.rememberMe)
    }

    return (
        <>
            <Form onSubmit={onSubmit}
                  validate={values => {
                      const errors = {}
                      if (!values.email) {
                          errors.email = 'Required'
                      }
                      if (!values.password) {
                          errors.password = 'Required'
                      }
                      else if (values.password.length < 6) {
                          errors.password = 'Password must be more than 5 symbols'
                      }
                      return errors
                  }}
                  render={({handleSubmit, form, submitting, pristine, values}) => (
                      <form onSubmit={handleSubmit}>
                          <div>
                              <Field name='email'>
                              {({input, meta}) => (
                                  <div>
                                      <input className={meta.error && meta.touched && 'error'} {...input} type="email" placeholder="Email"/>
                                      {meta.error && meta.touched && <span>{meta.error}</span>}
                                  </div>
                              )}
                              </Field>
                          </div>
                          <div>
                              <Field name='password'>
                              {({input, meta}) => (
                                  <div>
                                      <input {...input} type="text" placeholder="Password"/>
                                      {meta.error && meta.touched && <span>{meta.error}</span>}
                                  </div>
                              )}
                              </Field>
                              <span>{props.errorAuth}</span>
                          </div>
                          <div>
                              <Field name='rememberMe' type='checkbox' component='input'/> запомнить меня
                          </div>
                          <button type='submit'>LOGIN</button>
                      </form>
                  )

                  }

            />
        </>
    )
}

export default LoginForm