import React from 'react'

export const Testimonials = (props) => {
    const name = props.name
    const desc = props.desc
    const user = props.user
  return (
    <div className='bg-white p-5 shadow-md flex flex-col rounded-md'>
        <img src={user} alt="" />
        <h2>{name}</h2>
        <p>
            {desc}
        </p>
    </div>
  )
}
