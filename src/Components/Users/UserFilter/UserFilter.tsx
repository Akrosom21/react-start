import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Field, Form} from "react-final-form";
import { getUsersPage } from "../../../Redux/usersReducer";

function UserFilter() {
    const usersInPage = useSelector(state => state.usersPage.usersInPage)
    const dispatch = useDispatch()
    const onSubmit = (values) => {
        let userName = values.user ? values.user : ''
        let followed = values.followed ? values.followed : ''
        dispatch(getUsersPage(1, usersInPage, userName, followed))
    }
    return (
        <>
            <h2>Search</h2>
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
                          <div>
                              <label>Followed</label>
                              <Field name="followed" component="select">
                                  <option value="">All</option>
                                  <option value="true">Followed</option>
                                  <option value="false">Unfollowed</option>
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