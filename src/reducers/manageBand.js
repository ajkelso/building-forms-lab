export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      console.log("-------");
      console.log({bands: [...state.bands, action.payload]});
      console.log("-------");
      return {bands: [...state.bands, action.payload]}
  
    default:
      return state
  }
};
