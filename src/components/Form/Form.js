import React, { useState } from "react";
import styles from '../../styles/CreateAdmin.module.css'
import Image from "next/image";

import Images from '../../../public/Assets/img'

function Form({ fields, onSubmit, heading ,buttonHead,Show}) {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    // Clear the error message when the user types in a field
    setFormErrors({
      ...formErrors,
      [event.target.name]: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form fields
    let errors = {};
    let isValid = true;

    fields.forEach((field) => {
      console.log(field.name);
      if (!formData[field.name]) {
        errors[field.name] = `${field.label} is required`;
        isValid = false;
      }

      if (field.type === "email" && !isValidEmail(formData[field.name])) {
        errors[field.name] = "Invalid email address";
        isValid = false;
      }
    });

    if (!isValid) {
      setFormErrors(errors);
      return;
    }

    onSubmit(formData);
    setFormData({});
  };

  const isValidEmail = (email) => {
    // Basic email validation using a regular expression
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div>
       
    <h2 className={styles.Formhead}>{heading}</h2>
    <form className={styles.form_container} onSubmit={handleSubmit}>
      
      {fields.map((field) => (
        <div key={field.name} className={styles.Formfield}>
          <label  className={styles.Formlabel} htmlFor={field.label} >{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            id={field.label}
            value={formData[field.name] || ""}
            onChange={handleChange}
            className={styles.Forminput}
            placeholder={field.placeholder}
          />
        {/* <Image src={Show} width={30} height={30}/> */}

          {formErrors[field.name] && (
            <span className={styles.Formerror}>
              {formErrors[field.name]}
            </span>
          )}
        </div>
      ))}
     
      
    </form>
    <div className={styles.buttonContainer}>
    <button type="submit" className={styles.FormsubmitButton}>{buttonHead}</button>
    </div>
    
    </div>
  );
}
export default Form;