import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"; 
 

function SignUp(props) {
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const schema = yup.object().shape({
  firstName: yup.string().required("First name required"),
  lastName: yup.string().required("Last name required"),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().min(16).max(100).required().typeError("Age must be a number."),
  password: yup.string().min(4).max(20).required("Password must be at least 4 and max 20 characters.").matches(passwordRules, { message: 'Please create a stronger password' }),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords do not match.").required("Password must be at least 4 and max 20 characters."),
});

const {register, handleSubmit, formState: { errors }, } = useForm({resolver: yupResolver(schema)});

const onSubmit = (data) => {
  console.log(data);
}

  return(
    <form id='signUp' onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" { ...register ("firstName")}/>
      <p>{errors.firstName?.message}</p>

      <input type="text" placeholder="Last name" { ...register ("lastName")}/>
      <p>{errors.lastName?.message}</p>

      <input type="email" placeholder="email" { ...register ("email")}/>
      <p>{errors.email?.message}</p>

      <input type="number" placeholder="Age" { ...register ("age")}/>
      <p>{errors.age?.message}</p>

      <input type="password" placeholder="Enter Password" { ...register ("password")}/>
      <p>{errors.password?.message}</p>

      <input type="password" placeholder="Enter Password" { ...register ("confirmPassword")}/>
      <p>{errors.confirmPassword?.message}</p>
      
      <input type="submit" value="SIGN UP" id='submit'/>
    </form>
  );
}

export default SignUp;