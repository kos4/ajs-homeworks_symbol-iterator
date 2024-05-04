function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Team {
  constructor(count) {
    this.from = 1;
    this.to = count;
    this.characters = [
      {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 25,
        defence: 25,
      },
      {
        name: 'Мечник',
        type: 'Swordsman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Волшебник',
        type: 'Magician',
        health: 50,
        level: 1,
        attack: 10,
        defence: 40,
      },
    ];
  }

  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    const { characters } = this;

    return {
      next() {
        if (current <= last) {
          current += 1;
          const key = getRandomInRange(0, 2);
          return {
            done: false,
            value: characters[key],
          };
        }

        return {
          done: true,
        };
      },
    };
  }
}

const team = new Team(3);
for (const char of team) {
  console.log(char);
}
