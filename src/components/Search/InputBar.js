import React from 'react'

function SearchBar({ onEnter,searchString, setSearchString, setShowModal}) {

  return (
    <div className=''>
        <h1 className='text-2xl font-mono m-8 '>Wikipedia</h1>
        <img className='block m-auto  w-2/12' src={"/assets/wikipedia-logo.png"}></img>
        <div className='mt-8 flex md:w-6/12 rounded-xl m-auto  '>
        <SearchIcon ></SearchIcon>
        <input
        autoComplete="off"
        onKeyDown={onEnter}
        onBlur={(e) => setTimeout(() => {
          setShowModal(false)
        },100)}
        className='placeholder:italic border border-slate-300 rounded-xl placeholder:text-slate-400 block bg-white w-full  mx-auto rounded-md py-2 pl-12 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm border-l-none outline-l-none'
        name="search"
        id="search"
        type="text"
        value={searchString}
        placeholder="Search for wiki page"
        onChange={(e) =>setSearchString(e.target.value)}
        ></input>
        </div>
        
        </div>
  )
}

function SearchIcon({className}){
  return (<div className={"absolute left-100 placeholder:italic placeholder:text-slate-400 block rounded-xl py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500  focus:ring-sky-500 focus:ring-1 sm:text-sm "}><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg></div>
  )
}

export default SearchBar