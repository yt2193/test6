import '../components/customform.css'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react';


function CustomForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const [userInfo,setuserInfo]=useState();

      const onSubmit = (data) => {
        setuserInfo(data);
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-container">
                <div className="form-field">
                    <label htmlFor="name" >Name</label>
                    <input type="text" placeholder='Name' {...register('name', { required: true })}/>
                    <span style={{color:"red"}}>{errors.name?.type === "required" && "*Name is required"}</span> 
                </div>
                <div className="form-field">
                    <label htmlFor="email" >Email</label>
                    <input type="email" placeholder='Email' {...register('email', { 
                        required: true,
                        pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i, })}/>
                        <span style={{color:"red"}}>{errors.email?.type === "required" && "*Email is required"}
                            {errors.email?.type === "pattern" &&
                            "Entered email is in wrong format"}</span>
                </div>
                <div className="form-field">
                    <label htmlFor="password" >Password</label>
                    <input type="password" placeholder='Password' {...register('password',{
                        required: true,
                        minLength: 5,
                        maxLength: 20,
                    })}/>
                    <span style={{color:"red"}}>{errors.password?.type === "required" && "*Password is required"}
                        {errors.password?.type === "minLength" &&
              "Entered password is less than 5 characters"}
            {errors.password?.type === "maxLength" &&
              "Entered password is more than 20 characters"}</span>
                </div>
                <div className="form-field">
                    <input type="submit" value='Submit' />
                </div>
                <p>{JSON.stringify(userInfo)}</p>
                {/* <pre>{userInfo && Object.entries(userInfo).map(([key, value]) => (
                    <div key={key}>{key}: {JSON.stringify(value, null, 2)}</div>
                ))}</pre> */}
            </div>

        </form>
        
    )

}

export default CustomForm
