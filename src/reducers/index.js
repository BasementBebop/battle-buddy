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

const stats = (state = initialState.stats, action) => {
  let { health, maxHealth } = state;
  
  switch (action.type) {
    case 'DRINK_POTION':
      health = Math.min(health + 20, maxHealth);
      return {...state, health, maxHealth}
    case 'TAKE_DAMAGE':
      health = Math.max(0, health - action.damage)
      return {...state, health}
    default:
      return state;
  }
}

export default combineReducers({
  playerLevel,
  playerXp,
  position,
  stats
})