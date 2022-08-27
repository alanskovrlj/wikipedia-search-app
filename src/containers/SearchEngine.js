import React, {useEffect, useMemo, useState, useCallback} from 'react'
import {fetchPages, autocompletePageTitle, getPageFiles} from '../api/wikipedia.js'
import SearchBar from '../components/Search/InputBar'
import SearchResults from '../components/Search/ResultsList'
import SearchModal from '../components/Modals/SearchModal'
import Stats from '../components/Monitor'
import BarLoader from "react-spinners/BarLoader";
import {measurePerfomance} from '../utils/measurePerfomance'
import Monitor from '../components/Monitor'

var prevSearchString = "";

function WikipediaSearch() {
    const [searchString, setSearchString] = useState("Winston_Churchill")
    const [resultSet, setResultSet] = useState([{}])
    const [resultLimit, setResultLimit] = useState(10)
    const [modalResults, setModalResults] = useState();
    const [responseTime, setResponseTime] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [spin,setSpin] = useState(false);
    const [files, setFiles] = useState([]);

    async function searchWiki() {
       try {
            setShowModal(false)
            const response = await measurePerfomance(()=>fetchPages(searchString, resultLimit))
            const r = response.resultSet;
            const t = response.time;
            setResponseTime(t)
            setResultSet(r)
            setSpin(false)
       } catch(err) {
            console.log(err)
       }
    }

    async function autoCompleteSearch(title) {
        const r = await autocompletePageTitle(title)
        setModalResults(r)
    }

    useEffect(() => {
      setShowModal(true) 
      autoCompleteSearch(searchString)
    },[searchString])

    async function getFiles(pageName) {
        if(files.page == pageName) return;
        setFiles([])
        const f = await getPageFiles(pageName)
        setFiles({page: pageName, files: f.files})
    }

    const onSearchBarEnter =  (e) => {
        if(e.key == "Enter") {
          if(prevSearchString == searchString) return
          prevSearchString = searchString;
          searchWiki();
          setSpin(true)
        }
    }

  return (
    <div className='mx-8 m-auto relative'>

    <Monitor responseTime={responseTime} requestTitle={searchString} setResultLimit={setResultLimit} resCount={resultSet.length}></Monitor>

    {/* SEARCH INPUR BAR*/}
    <SearchBar setSpin={setSpin} onEnter={onSearchBarEnter} searchString={searchString} setSearchString={setSearchString} setShowModal={setShowModal}></SearchBar>
    
    {/* NUM OF RESULTS INFO */}
    <div className='mb-10 text-left text-xs pl-5 pt-2  md:w-1/2 m-auto text-slate-400'>{resultSet?.length == 0 ? "No results for '" + searchString +"'": "Showing " + resultSet?.length + " results"}</div>

    {/* LOADING*/}
    {spin && <BarLoader className='m-auto bg-blue-500'></BarLoader>}

    {/* SEARCH RESULT BOX */}
    {showModal && <SearchModal  onClick={(title)=>{
      setSearchString(title);
      searchWiki();
      setShowModal(false);
    }} resultSet={modalResults}></SearchModal>}

    {/*LSIT RESULTS*/}
    <SearchResults resultSet={resultSet} getFiles={getFiles} files={files}></SearchResults>
    </div>
  )
}

export default WikipediaSearch