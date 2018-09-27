import { combineReducers } from 'redux';
const playerLevel = (state = 1, action) => {
  switch (action.type) {
    case 'LEVEL_UP':
      return state + 1;
    default:
      return state;
  }
}

const playerXp = (state = 0, action) => {
  switch (action.type) {
    case 'GAIN_XP':
      return state + action.xp;
    default:
      return state;
  }
}

export default combineReducers({
  playerLevel,
  playerXp
})