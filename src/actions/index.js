export const gainXp = (xp) => ({
  type: 'GAIN_XP',
  xp
});

export const levelUp = () => ({
  type: 'LEVEL_UP'
});

export const move = (x, y) => ({
  type: 'MOVE',
  position: {
    x,
    y
  }
});

export const drinkPotion = () => ({
  type: 'DRINK_POTION'
});

export const takeDamage = (damage) => ({
  type: 'TAKE_DAMAGE'
});