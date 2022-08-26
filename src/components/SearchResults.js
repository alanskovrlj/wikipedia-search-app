import React from 'react'
import parse from 'html-react-parser'

function SearchResults({resultSet}) {
  return (
    <div className='grid gap-4 flex-auto md:w-5/12 m-auto'>
          {resultSet?.map((item)=>{
            return  (
              <div className='p-5 flex'><div className=''>
              <h3 className='text-left text-blue-600' key={item.id}>{item.title}</h3>
              
              <p className='text-left overflow-hidden rounded-lg border-solid  border-slate-400'>{item.excerpt && parse(item.excerpt)}</p></div>
              <a target="_" href={`https://en.wikipedia.org/wiki/`+item.key}>
              <img className='pl-6 block m-auto mb-2w-28' src={item.thumbnail?.url} alt="">
              </img></a>
              </div>
            )
          })}
            
         
        </div>
  )
}



export default SearchResults