import React from 'react';

function ErrorComponent({children}) {
  return (
    <div className='bg-red-700 text-white text-center p-2 uppercase font-bold mb-3 rounded-lg'>
        <p >{children}</p>
    </div>
  )
}

export default ErrorComponent;