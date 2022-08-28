import React, {useEffect, useMemo, useState, useCallback} from 'react'
import {fetchPages, autocompletePageTitle, getPageFiles} from '../api/wikipedia'
import SearchBar from '../components/Search/InputBar'
import SearchResults from '../components/Search/ResultsList'
import SearchModal from '../components/Modals/SearchModal'
import BarLoader from "react-spinners/BarLoader";
import {measurePerfomance} from '../utils/measurePerfomance'
import Monitor from '../components/Monitor'
import {Files, ResultSet} from '../global/types'

var prevSearchString = "";
var prevFilesSourcePage = "";

function WikipediaSearch() {
    const [searchString, setSearchString] = useState<string>("")
    const [resultSet, setResultSet] = useState<ResultSet[]>([])
    const [resultLimit, setResultLimit] = useState<number>(10)
    const [modalResults, setModalResults] = useState<ResultSet[]>([]);
    const [responseTime, setResponseTime] = useState<number>(0)
    const [showModal, setShowModal] = useState(false)
    const [spin,setSpin] = useState(false);
    const [files, setFiles] = useState<Files[]>([]);


    async function searchWiki() {
       try {
            setShowModal(false)
            const response = await measurePerfomance(()=>fetchPages(searchString, resultLimit))
            const data = response.resultSet;
            const t = response.time;
            setResponseTime(t)
            setResultSet(data)
            setSpin(false)
       } catch(err) {
            console.log(err)
       }
    }

    async function autoCompleteSearch(title : string) {
        const r = await autocompletePageTitle(title)
        setModalResults(r)
    }

    useEffect(() => {
      setShowModal(true) 
      autoCompleteSearch(searchString)
    },[searchString])

    async function getFiles(pageName : string) {
        if(prevFilesSourcePage == pageName) return;
        prevFilesSourcePage = pageName;
        setFiles([])
        const f = await getPageFiles(pageName)
        setFiles(f.files)
    }

    const onSearchBarEnter =  () => {
      if(prevSearchString == searchString) return
      prevSearchString = searchString;
      searchWiki();
      setSpin(true)
    }

    

  return (
    <div className='mx-8 m-auto relative'>

    <Monitor requestTitle={searchString} responseTime={responseTime} setResultLimit={setResultLimit} resCount={resultSet.length}></Monitor>
    
    {/* SEARCH INPUR BAR*/}
    <SearchBar onEnter={onSearchBarEnter} searchString={searchString} setSearchString={setSearchString} setShowModal={setShowModal}></SearchBar>
    
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