import React, {useState,} from 'react'
import parse from 'html-react-parser'
import FileList from '../Modals/FileModal'
import { getPageFiles } from '../../api/wikipedia'
import {ResultSet, Files} from '../../global/types'

interface Props {
  resultSet: ResultSet[],
  files: Files[],
  getFiles: (a : string) => void
}

function SearchResults({resultSet, files, getFiles} : Props) {

  const [filesModal, setFilesModal] = useState<boolean>(false)

  return (
    <div className='grid gap-4 flex-auto md:w-5/12 m-auto'>
    {filesModal && <FileList setFilesModal={setFilesModal} files={files}></FileList>}
          {resultSet?.map((item)=>{
            return  (
              <div className='p-5 flex'><div className=''>
              <h3  className='cursor-pointer text-left text-blue-600' key={item.id}>{item.title}</h3>
              <p className='text-left overflow-hidden rounded-lg border-solid  border-slate-400'>{item.excerpt && parse(item.excerpt)}</p>
              <a  target="_blank" href={`https://en.wikipedia.org/wiki/`+item.key} >
              <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>Open page</button>
              </a>

              <button onClick={() => {
                setFilesModal(true) 
                getFiles(item.key)
              }} className='mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Get files</button>
              </div>
              <a target="_blank" href={`https://en.wikipedia.org/wiki/`+item.key}>
              <img className='pl-6 block m-auto mb-2w-28' src={item.thumbnail?.url} alt="">
              </img></a>
              </div>
            )
          })}
            
         
        </div>
  )
}



export default SearchResults