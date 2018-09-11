const api = "http://localhost:3001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const downvote = (post) =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      option: 'downvote',
    })
  }).then(res => res.json())


export const getCategories = () =>
  fetch(`${api}/categories/`, {headers})
    .then(res => res.json())
    .then(data => data.categories);

export const getAllPosts = () =>
  fetch(`${api}/posts/.`, {headers})
    .then(res => res.json());

export const upvote = (post) =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      option: 'upVote',
    })
  }).then(res => res.json())


export const search = (query) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({query})
  }).then(res => res.json())
    .then(data => data.books)


export const getPost = (id) =>
  fetch(`${api}/posts/${id}`, {
    method: 'GET',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())