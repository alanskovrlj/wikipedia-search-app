export const fetchPages = (pageName, limit) => fetch(`https://en.wikipedia.org/w/rest.php/v1/search/page?q=${pageName}&limit=${limit}`+
'&origin=*').then(r=>r.json()).then(d=>d.pages)

export const getPage = (pageName) => fetch(`https://en.wikipedia.org/w/rest.php/v1/page/${pageName}/bare`).then(r=>r.json()).then(d=>d)

export const getPageSource = (pageName) => fetch(`https://en.wikipedia.org/w/rest.php/v1/page/${pageName}`).then(r=>r.json()).then(d=>d) 