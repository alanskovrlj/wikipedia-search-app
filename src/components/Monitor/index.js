import React, {useState , useEffect} from 'react'

function Monitor({resCount,responseTime,requestTitle, setResultLimit}) {

  const [rangeInput, setRangeInput] = useState(10);

  useEffect(() => {
    setResultLimit(rangeInput)
  }, [rangeInput])
  

  return (
      <aside className="w-64 absolute" aria-label="Sidebar ">

   <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
    
      <ul class="space-y-1">
        
   <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            
               
   <h4 className='mb-2'>Searched Term: {requestTitle}</h4>
            </a>
         </li>




         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
               <span class="flex-1 ml-3 whitespace-nowrap">{resCount} {resCount == 1 ? "result" : "results"}</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>
               <span class="flex-1 ml-3 whitespace-nowrap">{responseTime} ms</span>
            </a>
         </li>
         <li>
          <div className='flex items-start p-2  font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700y'>
            
               <span class="flex-1 ml-3 whitespace-nowrap"><label for="small-range" class="block mb-2 text-sm  text-gray-900 dark:text-gray-300"> Request Limit: {rangeInput}</label>
<input id="small-range" type="range" onChange={(e) => setRangeInput(e.target.value)} value={rangeInput} class="mb-6 w-3/4 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"></input></span>
</div>
         </li>
         
      </ul>
   </div>
</aside>
  )
}

export default Monitor