import React from 'react'

export default function Timer() {
    return (
        <div className='font-Unica+one flex justify-center md:justify-start gap-6 items-center mt-8 mb-10 md:mb-0 lg:mt-16 '>
            <h3 className='text-5xl lg:text-6xl'>00 <span className='text-xs md:text-sm'>H</span></h3>
            <h3 className='text-5xl lg:text-6xl'>00 <span className='text-xs md:text-sm'>M</span></h3>
            <h3 className='text-5xl lg:text-6xl'>00 <span className='text-xs md:text-sm'>S</span></h3>
        </div>
    )
}
