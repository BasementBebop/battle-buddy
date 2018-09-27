import { combineReducers } from 'redux';

const initialState = {
  xp: 0,
  level: 1,
  position: {
    x: 0,
    y: 0
  },
  stats: {
    health: 50,
    maxHealth: 50
  },
  inventory: {
    potions: 1
  }
}

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

const position = (state = initialState.position, action) => {
  switch (action.type) {
    case 'MOVE':
      let { x, y } = action.position;
      x += state.x;
      y += state.y;
      return { x, y };
    default:
      return state;
  }
    
}

export default combineReducers({
  playerLevel,
  playerXp,
  position
})