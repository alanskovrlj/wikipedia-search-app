import React from 'react'

function SearchModal({resultSet}) {
  return (
    <div className='md:w-6/12 border rounded-md rounded-t-sm m-auto relative bottom-16 bg-slate-50'>
        <div className=''>
        <ul className='w-full'>
            {resultSet?.slice(0,5).map((item) => {
                return (<li className='px-8 py-1 list-none text-left m-l-2  bg-white w-full  hover:bg-sky-100 hover:cursor-pointer sm:text-sm'>{item.title}</li>)
            })}
        </ul>
        </div>
    </div>
  )
}

export default SearchModal