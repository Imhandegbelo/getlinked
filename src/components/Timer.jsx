import React from 'react'

export default function Timer() {
    return (
        <div className='flex gap-6 mt-4'>
            <h3 className='text-6xl'>00 <span className='text-sm'>H</span></h3>
            <h3 className='text-6xl'>00 <span className='text-sm'>M</span></h3>
            <h3 className='text-6xl'>00 <span className='text-sm'>S</span></h3>
        </div>
    )
}
