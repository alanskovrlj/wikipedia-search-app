import React, {useEffect, useState} from 'react'
import {ResultSet} from '../../global/types'

function SearchModal({onClick, resultSet} : {onClick: (a : string) => void,resultSet: ResultSet[]}) {
  return (
    <div className='relative '>
    <div className='md:w-6/12 border rounded-md rounded-t-sm m-auto absolute inset-x-0 bg-slate-502 -top-16'>
        <div className=''>
        <ul className='w-full'>
            {resultSet?.slice(0,5).map((item) => {
                return (<li 
                  onClick={()=>onClick(item.title)}
                  className='px-8 py-1 list-none text-left m-l-2  bg-white w-full  hover:bg-sky-100 hover:cursor-pointer sm:text-sm'>{item.title}</li>)
            })}
        </ul>
        </div>
    </div>
    </div>
  )
}

export default SearchModal