import React from 'react'
import { useForm } from "react-hook-form";
import Field from "../Components/Field";
import FieldSet from "../Components/FieldSet";
const RegistrationForm = () => {
     const { register, handleSubmit,formState:{error} ,setError} = useForm();
  const submitfrom = (f) => {
    console.log(f);
    const user={
        email:'rejuananik@gmail.com',
        password:'123456789'
        }
        const found =f.email === user.email && f.password === user.password;
        if(!found){
            setError("root.random",{
                message:'user not found ',
                type:'error'
            })
        }
  };

  return (
    <>
    <form>
       <div>
      <form onSubmit={handleSubmit(submitfrom)}>
        <FieldSet label="Enter Your LogIn details">
          <Field label="Email"error={error.email}>
            <input
              {...register("email",{required:'email is required'})}
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your email adress"
            />
          </Field>

          <Field label="Password" error={error.password}>
            <input
              {...register("password",{required:'password is mendatory',minLength:{
                value:8,
                message:'your password must be eight character'
              }})}
              type="password"
              name="password"
              id="Enter Password"
              placeholder="Enter Password"
            />
          </Field>
          <Field>
            <button className="text-md text-white text-md cursor-pointer p-1 rounded-lg m-auto bt-purple-500 bg-black">
              LogIn
            </button>
            
          </Field>
        </FieldSet>
      </form>
    </div><div>
      <form onSubmit={handleSubmit(submitfrom)}>
        <FieldSet label="Enter Your LogIn details">
          <Field label="Email"error={error.email}>
            <input
              {...register("email",{required:'email is required'})}
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your email adress"
            />
          </Field>

          <Field label="Password" error={error.password}>
            <input
              {...register("password",{required:'password is mendatory',minLength:{
                value:8,
                message:'your password must be eight character'
              }})}
              type="password"
              name="password"
              id="Enter Password"
              placeholder="Enter Password"
            />
          </Field>
          <Field>
            <button className="text-md text-white text-md cursor-pointer p-1 rounded-lg m-auto bt-purple-500 bg-black">
              LogIn
            </button>
            
          </Field>
        </FieldSet>
      </form>
    </div><div>
      <form onSubmit={handleSubmit(submitfrom)}>
        <FieldSet label="Enter Your LogIn details">
          <Field label="Email"error={error.email}>
            <input
              {...register("email",{required:'email is required'})}
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your email adress"
            />
          </Field>

          <Field label="Password" error={error.password}>
            <input
              {...register("password",{required:'password is mendatory',minLength:{
                value:8,
                message:'your password must be eight character'
              }})}
              type="password"
              name="password"
              id="Enter Password"
              placeholder="Enter Password"
            />
          </Field>
          <Field>
            <button className="text-md text-white text-md cursor-pointer p-1 rounded-lg m-auto bt-purple-500 bg-black">
              LogIn
            </button>
            
          </Field>
        </FieldSet>
      </form>
    </div>

    </form>
    </>
  )
}

export default RegistrationForm