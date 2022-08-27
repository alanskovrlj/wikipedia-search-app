import React, {useState,useEffect} from 'react'
import BarLoader from "react-spinners/BarLoader";

function Modal({files, setFilesModal}) {

    const [spin,setSpin] = useState(false);
    
    useEffect(() => {
        if(!files) setSpin(true)
        else setSpin(false)
    }, [files])
    
    return (<>
        <div onBlur={()=>setFilesModal(false)} id="defaultModal" tabindex="-1" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
            <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Files
                        </h3>
                        
                        <button 
                        onClick={() => setFilesModal(false)}
                        type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div class="p-6 h-42 flex  overflow-x-auto">
                    {spin && <BarLoader className='m-auto bg-blue-500'></BarLoader>}
                    <FileList files={files}/>
                    </div>
                </div>
            </div>
        </div>
        </>)
}

function FileList({files}) {
    return (<>
        {files && files.map(item => {
            return (<div className='flex-col h-40  mt-0 px-4'>
                <img className='max-h-20 p-2 block' src={item?.original?.url}></img>
                
                <span className='text-xs leading-none	'>{item?.title}</span>
                </div>)
        })}
        </>
    )
}
export default Modal