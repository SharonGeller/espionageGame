export const getRoles = (characters, { players, spies }) => {
  const totalPlayers = players + spies;
  const roles = [];

  for (let i = 0; i < totalPlayers; i++) {
    if (i < spies) roles[i] = "spy";
    else roles[i] = characters[i - spies] || characters[characters.length - 1];
  }
  let shuffledRoles = shuffle(roles);
  shuffledRoles.push("end");
  return shuffledRoles;
};

export const getLocation = (locations) => {
  return shuffle(locations)[0];
};

const shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
