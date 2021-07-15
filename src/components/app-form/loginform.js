import React, { useState } from 'react';
import './Form.css';
import Login from './login';
import FormSuccess from './FormSuccess';

const loginform = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const click= alert("You have Successfully registered")
  console.log("succesfull")
  function submitForm() {
    setIsSubmitted(true);
  

  }


  return (
    <>
      <div >
      
        {!isSubmitted ? (
          <Login submitForm={submitForm} />
        ) : (
          <FormSuccess/>
        )}
      </div>
    </>
  );
};

export default loginform;