Building a Data Table Component in React/Redux.

Building and developing data tables is a common challenge in my experience.

STEP 1. Creating A Table With React/Redux
Since multiple components read and simultaneously output the same data, I decided to use the Redux state manager for keeping an actual state of a data array for all components.
STEP 2. Creating Sortable List
STEP 3. React-Select component
React-Select component for easy access to listing data.

The code in action is responsible for handling the button click. It activates an Action Creator, that dispatch action to Reducer. 
Reducer creates a new state and sent it to Store. In its turn Store call all subscribers about changing state.
 
Selector code is in charge of sorting and selecting data from the state  Store, depending on the parameters that came from the reducer.

Now data ready to render in Component.

