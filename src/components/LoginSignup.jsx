import React from 'react';
import style from './LoginSignup.module.css';
import {useState} from 'react';

const LoginSignup = () => {
  
  const[formData, setFormData] = useState({
    name : "",
    email : "",
    password : "",
  });


  const handleInputChange = (e) =>{
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:value,
    });
  };



  const handleContinue =()=>{
    const{name, email, password} = formData;
  
  if(!name || !email || !password){
    alert("Please fill all the fields");
  }else{
    alert("Signup successful!");
    console.log("Signup successful", formData)
  }};
  
  return (
    <div className={style.LoginSignup}>
        <div className={style.container}>
            <h1>Sign Up</h1>
            <div className={style.fields}>
                <input
                 type="text"
                  placeholder=" Name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange} 
                  />

                <input
                 type="email" 
                 placeholder=" Email Address"
                 name="email" 
                 value={formData.email}
                 onChange={handleInputChange}
                  />

                <input
                 type="password"
                  placeholder=" Password" 
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  /> 
            </div>
            <div className={style.agree}>
                <input
                 type="checkbox" 
                 name=''
                id=''
                  />
                <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>
            <button className={style.btn} onClick={handleContinue}>Continue</button>
            <p className={style.login}>Already have an account? <span>Login here</span></p>
        </div>
      
    </div>
  )
}

export default LoginSignup
