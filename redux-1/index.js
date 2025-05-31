// explain below concepts and write an example for each one

// action:
// In Redux, actions are the JavaScript object which has information. Having multiple actions will need multiple action creators. These actions should be unique in redux. Especially, the type of action must be defined properly to identify that. We will take the example of to-do list actions.
const action = {
  type: "ADDBOOK",
  paylod: {
    name: "hadiseh",
    id: 458,
  },
};
// action creator:
// action creators streamline the process of creating these actions, promoting clarity, maintainability, and reusability in your codebase.
const actionCreator = (data) => {
  return {
    type: "ADDBOOK",
    paylod: data,
  };
};

// reducer:
//A Redux reducer is a function that determines how the state of an application changes in response to an action sent to the store. Think of it as a way to automate state changes, ensuring each transition is predictable and transparent.
const reducer = (state = initialState, action) => {
  if (action === "ADDBOOK") {
    /////
  } else return state;
};

// store:
//A "store" is a container that holds your application's global state. A store is a JavaScript object with a few special functions and abilities that make it different than a plain global object: You must never directly modify or change the state that is kept inside the Redux store.
const store = createStore(reducer);
export default store;
