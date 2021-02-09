import { CHANGE_SELECTION } from '../constants';
const dafaultFilters = {
  selected: []
};
export default ((filters = dafaultFilters, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case CHANGE_SELECTION:
      return { ...filters,
        selected: payload.selected
      };

    default:
      return filters;
  }
});