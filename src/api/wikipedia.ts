export const fetchPages = (pageName: string, limit:number) => fetch(`https://en.wikipedia.org/w/rest.php/v1/search/page?q=${pageName}&limit=${limit}`+
'&origin=*').then(r=>r.json()).then(d=>d.pages)

export const getPage = (pageName: string) => fetch(`https://en.wikipedia.org/w/rest.php/v1/page/${pageName}/bare`).then(r=>r.json()).then(d=>d)

export const getPageSource = (pageName: string) => fetch(`https://en.wikipedia.org/w/rest.php/v1/page/${pageName}`).then(r=>r.json()).then(d=>d) 

export const getPageFiles = (pageName: string) => fetch(`https://en.wikipedia.org/w/rest.php/v1/page/${pageName}/links/media`).then(r=>r.json()).then(d=>d) 

export const autocompletePageTitle = (title: string) => fetch(`https://en.wikipedia.org/w/rest.php/v1/search/title?q=${title}&limit=5`).then(r=>r.json()).then(d=>d.pages) 