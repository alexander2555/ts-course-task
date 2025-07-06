interface userEmail {
  id: number
  email: string
}

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

const getData = <T extends userEmail[]>(url: string): Promise<T> =>
  fetch(url).then(res => res.json())

getData(COMMENTS_URL).then(data =>
  data.forEach(d => console.log(`ID: ${d.id}, Email: ${d.email}`))
)
