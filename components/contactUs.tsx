import React from 'react'
import Form from './form'

const ContactUs = () => {

  return (
    <div id="contact" className="relative flex flex-col lg:flex-row justify-between items-center">
      <div className="text-center lg:text-left lg:max-w-xl">
        <h3 className="h3 text-white mb-2">Contact Us</h3>
        <p className="text-gray-300 text-lg mb-6">Get in touch with us! Use our simple and user-friendly 'Contact Us' form to share your name, email, and message. We'd love to hear from you!</p>

        <Form />
        {/* <form className="w-full lg:w-auto" >
          <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
            <label className='text-white'>First Name
            <input type="text" className="mb-2 form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="First Name" aria-label="Your first name" />
            </label>
            <label className='text-white'>
              Last Name
            <input type="text" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Last Name" aria-label="Your last name" />
            </label>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
            <label className='text-white'>
              Email 
            <input type="email" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Email Address" aria-label="Your Email" />
            </label>
            <label className='text-white'> 
              City
            <input type="text" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="City" aria-label="Your City" />
            </label>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
            <label className='text-white'>
              Requirments
            <textarea className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Requirments" aria-label="Your Requirments" />
            </label>
          </div>
          <a className="btn text-white bg-purple-600 hover:bg-purple-700 shadow" href="#0">Submit</a>
        </form > */}
      </div>
    </div>
  )
}

export default ContactUs