import axios from 'axios';

export const FETCH_POSTS='FETCH_POSTS';
export const CREATE_POST='CREATE_POST';
export const FETCH_POST='FETCH_POST';
export const DELETE_POST='DELETE_POST';

const ROOT_URL ='http://reduxblog.herokuapp.com/api';
const API_KEY ='?key=jesgdkhhwnk';


 export function fetchPosts(){
   const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);
   return{
  type: FETCH_POSTS,
  payload: request
   }
 }

export function createPost(props){ //we will make sure props we pass are title categories
  const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`, props)

return{
  type:CREATE_POST,
  payload:request
}
}

export function fetchPost(id){ //we will make sure props we pass are title categories
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)

return{
  type:FETCH_POST,
  payload:request
}
}
export function deletePost(id) { //we will make sure props we pass are title categories
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)

return{
  type:DELETE_POST,
  payload:request
}
}
// we donot need any reducer for delete request we dodnot need toreact
// to delete request in any shape or form as our app os currently build so we
// will immediately go to our show component
