interface userEmail {
  id: number
  email: string
}

const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments'

const getData = async <T extends userEmail[]>(url: string): Promise<T> =>
  await fetch(url).then(res => res.json())

getData(COMMENTS_URL).then(data =>
  data.forEach(d => console.log(`ID: ${d.id}, Email: ${d.email}`))
)
