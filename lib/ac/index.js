import { SORT_UP_DOWN, CHANGE_SELECTION } from '../constants';
export function sortingData(head, isAsc) {
  return {
    type: SORT_UP_DOWN,
    payload: {
      head,
      isAsc
    }
  };
}
export function changeSelection(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: {
      selected
    }
  };
}