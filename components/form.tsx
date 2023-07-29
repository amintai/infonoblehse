"use client"

import React, { useState } from 'react'
import Input from './input'
import { Formik } from 'formik'
import * as Yup from 'yup';

const Form = () => {
  const contactusSchema = () => Yup.object().shape({
    first_name: Yup.string()
      .required('First Name is Required.'),
    last_name: Yup.string()
      .required('Last Name is Required.'),
    email: Yup.string()
      .required('Email Address is Required.')
      .trim('Email Address is Required.')
      .email('Please Enter Valid Email Address'),
  });


  const [{isLoading}, setState] = useState(({
    isLoading: false
  }));

  console.log(isLoading)
    return (
    <Formik
      initialValues={{
        first_name: '',
        last_name: '',
        email: '',
        remark: '',
      }}
      validateOnChange={true}
      validateOnBlur={true}
      validationSchema={contactusSchema}
      onSubmit={(values) => {
        console.log(values);
        let first_name = values?.first_name;
        let email = values?.email;
        let last_name = values?.last_name;
        let remark = values?.remark;
        setState((state) => ({
          ...state,
          isLoading: true
        }));
        try {
          const response = fetch('http://localhost:3000/api/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              first_name,
              email,
              last_name,
              remark
            }),
            mode: 'no-cors',
          })
          
        } catch (error) {
          console.log(error)
          setState((state) => ({
            ...state,
            isLoading: false
          }));
          alert('Something went wrong. Please try again.')
        } finally {
          setState((state) => ({
            ...state,
            isLoading: false
          }));
        }
      }}
    >
      {
        ({
          handleChange,
          setFieldValue,
          values,
          handleSubmit,
          errors,
          touched,
        }) => (

          <form className="w-full max-w-lg" onSubmit={handleSubmit} >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <Input
                  type='text'
                  label='First Name'
                  handleChange={handleChange}
                  error={errors?.first_name && touched?.first_name}
                  placeholder='Enter First Name'
                  key='first_name'
                  name='first_name'
                  value={values.first_name}
                  errorMessage={errors?.first_name}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <Input
                  type='text'
                  label='Last Name'
                  handleChange={handleChange}
                  error={errors?.last_name && touched?.last_name}
                  placeholder='Enter Last Name'
                  key='last_name'
                  name='last_name'
                  value={values.last_name}
                  errorMessage={errors?.last_name}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <Input
                  type='email'
                  label='Email Address'
                  handleChange={handleChange}
                  error={errors?.email && touched?.email}
                  placeholder='Enter Email Address'
                  key='email'
                  name='email'
                  value={values.email}
                  errorMessage={errors?.email}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                  Remarks
                </label>
                <textarea placeholder='Enter Your Remark' onChange={handleChange} name='remark' value={values?.remark} />
              </div>
            </div>

            {
              isLoading ? <button type="button" className="bg-indigo-500 ..." disabled>
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                </svg>
                Processing...
              </button> : <button className="btn text-white bg-violet-700 hover:bg-violet-800 w-full" type='submit'>Submit</button>
            }

          </form>
        )
      }
    </Formik>
  )
}

export default Form