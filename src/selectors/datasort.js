import dafaultdataset from '../dataset'
import { SORT } from '../constants'

const initialState = {};

export default (state = initialState , action) => {
  const { type, payload } = action

  switch (type){

    case SORT:

      return tabledataState.slice().sort((a, b) => {
        console.log(a[payload.head])

          let valA = a[payload.head]
          let valB = b[payload.head]

          if (valA > valB) {
            return [payload.isAsc ? 1 : -1]
          }

          if (valA < valB) {
            return payload.isAsc ? -1 : 1
          }
          return 0
      })

    default:
      return tabledataState

  }
}
