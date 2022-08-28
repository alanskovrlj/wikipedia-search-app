export interface ResultSet {
    title: string,
    excerpt: string,
    id: number,
    key: string
    thumbnail: {
        url: string
    }
}

export interface Files {
        title: string
        original: {
        url : string
    }
}
