import React from 'react'
import FieldSet from '../Components/FieldSet'
import Field from '../Components/Field'

const LogInForm = () => {
  return (
    <div>
       <form>
         <FieldSet label="Enter Your LogIn details">
            <Field label="Email">
              <input 
              type='email'
              name='email'
              id='email'
              placeholder='Enter Your email adress'
              />
            </Field>
              <Field label="Password">
              <input 
              type='password'
              name='password'
              id='Enter Password'
              placeholder='Enter Password'
              />
            </Field>
            <Field>
                <button
                className='text-md text-white text-md cursor-pointer p-1 rounded-lg m-auto bt-purple-500 bg-black'
                >LogIn</button>
            </Field>

        </FieldSet>
       </form>
    </div>
  )
}

export default LogInForm