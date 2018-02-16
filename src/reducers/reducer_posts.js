import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const INITIAL_STATE ={ all: [], post: null};
// seprate piece of state [] one for list of blogpost and null forcuurently selected blog post
export default function (state=INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POST:
return { ...state, post:action.payload.data}
    case FETCH_POSTS:
return { ...state, all:action.payload.data}
    default:
    return state
  }
}


//the data we care about is available on action.payload.data
// the reducer always returns anew object when ever we rerurn our state
// ...state   ===keep our existing state around
