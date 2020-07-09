import { SORT_UP_DOWN } from '../constants'

const dafaultdata = {
  head: null,
  isAsc: null
}

export default ( state = dafaultdata , action ) => {
  const { type, payload } = action

  switch (type){
    case SORT_UP_DOWN:
      return{ ...state, head: payload.head, isAsc: payload.isAsc,  }
    default:
      return state
  }
}
