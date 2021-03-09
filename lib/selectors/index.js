import { createSelector } from 'reselect';
import { orderBy } from 'lodash';
export const datasetSelector = state => state.dataset;
export const headSelector = state => state.datasort.head;
export const isAscSelector = state => state.datasort.isAsc;
export const selectedArticleSelector = state => state.filters.selected;
export const sortedDataTableSelector = createSelector(datasetSelector, headSelector, isAscSelector, selectedArticleSelector, (dataset, head, isAsc, selected) => {
  const rezult = dataset.filter(data => {
    return selected !== null ? !selected.value || selected.value === data.id : data;
  });
  return orderBy(rezult, [head], isAsc ? ['asc'] : ['desc']);
});