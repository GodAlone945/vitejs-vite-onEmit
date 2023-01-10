const defaultState = {
  num: 20,
};

let reducer = (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  return state;
};

export default reducer;
