import React, { ReactNode } from 'react'


type Props = {
  title: String,
  paragraph: String,
  icon: ReactNode
}

const OurServices = ({
  title,
  paragraph,
  icon
}:Props) => {
  return (
    <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
      {icon}
      <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{title}</h4>
      <p className="text-gray-600 text-center">{paragraph}</p>
    </div>
  )
}

export default OurServices;