const redux = require("redux");
const createStore = redux.createStore;
// create initial state
const initialState = {
  hobbies: [],
};

// action
// const addHobby = { type: "ADD", payload: "swimming" };

// action creator
const addAction = (hobby) => {
  return { type: "ADD", payload: hobby };
};
// reducer
const myReducer = (state = initialState, action) => {
  // console.log(state, action);
  switch (action.type) {
    case "ADD":
      let newstate = { ...state, hobbies: [...state.hobbies, action.payload] };
      return newstate;

    default:
      return state;
  }
};

// create store by registering the reducer to it.
const store = createStore(myReducer);

store.dispatch(addAction("swimming"));
console.log(store.getState());
store.dispatch(addAction("cycling"));
console.log(store.getState());
store.dispatch(addAction("painting"));
console.log(store.getState());
store.dispatch(addAction("gaming"));
console.log(store.getState());
// store.subscribe(() => console.log(store.getState()));
