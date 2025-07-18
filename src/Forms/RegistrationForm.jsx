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

        
    </form>
    </>
  )
}

export default RegistrationForm