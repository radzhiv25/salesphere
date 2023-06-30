import React from 'react'

export const Product = ( item = [] ) => {
  return (
    <div className='p-10'>
      {
        item.map((Items) => {
          return(
            <div className="card shadow-md">

            </div>
          )
        } )
      }
    </div>
  )
}
