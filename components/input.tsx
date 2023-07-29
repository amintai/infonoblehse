import React from 'react'


type Props = {
  label: String,
  type: string,
  placeholder: string,
  handleChange?: any,
  error?: boolean | undefined | any,
  name: string,
  value?: any,
  errorMessage?: string,
}

const Input = ({
  label,
  type,
  placeholder,
  handleChange,
  error,
  name,
  value,
  errorMessage
}: Props) => {
  return (
    <>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        {label}
      </label>
      <input
        onChange={handleChange}
        name={name}
        value={value}
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type={type} placeholder={placeholder} />
      {error && <p className="text-red-500 text-xs italic">{errorMessage}</p>
      }

    </>

  )
}

export default Input