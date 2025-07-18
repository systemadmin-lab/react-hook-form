import React from 'react'
import FieldSet from '../Components/FieldSet'
import Field from '../Components/Field'

const LogInForm = () => {
  return (
    <div>
        <FieldSet label="Enter Your LogIn details">
            <Field label="Email">
              <input 
              type='email'
              name='email'
              id='email'
              placeholder='Enter Your email adress'
              />
            </Field>

        </FieldSet>
    </div>
  )
}

export default LogInForm