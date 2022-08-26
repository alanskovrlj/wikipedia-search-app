import React, {useEffect, useState} from 'react'
import {fetchPages, getPage, getPageSource} from '../api/wikipedia.js'
import SearchBar from './SearchBar.js'
import SearchResults from './SearchResults'
import SearchModal from './SearchModal'

async function checkResponseTime(fun) {
  let time1 = performance.now();
  await fun;
  let time2 = performance.now();
  console.log(time2 - time1)
  return time2 - time1;
}

function WikiSearch() {
    const [searchString, setSearchString] = useState("Winston_Churchill")
    const [resultSet, setResultSet] = useState([{}])
    const [resultLimit, setResultLimit] = useState(100)
    const [responseTime, setResponseTime] = useState(false)
    const [showModal, setShowModal] = useState(false)

    async function searchWiki() {
       try {
            if(!searchString) return setShowModal(false)
            setShowModal(true)
            let time1 = performance.now();
            const r = await fetchPages(searchString, resultLimit);
            let time2 = performance.now();
            setResponseTime(((time2 - time1)/ 1000).toFixed(2))
            setResultSet(r)
            return time2 - time1;
       } catch(err) {
            console.log(err)
       }
    }

    useEffect(() => {
        searchWiki();
    }, [searchString])
    
  return (
    <div className='mx-8 m-auto'>
    <SearchBar searchString={searchString} setSearchString={setSearchString} resultSet={resultSet} responseTime={responseTime} setShowModal={setShowModal}></SearchBar>
    {showModal && <SearchModal resultSet={resultSet}></SearchModal>}
    <SearchResults resultSet={resultSet}></SearchResults>
    </div>
  )
}

export default WikiSearch