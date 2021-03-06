const getDataFromApi = async () => {
  const promisesResult = await Promise.all([
    fetchCharacters('https://rickandmortyapi.com/api/character/'),
    fetchCharacters('https://rickandmortyapi.com/api/character/?page=2'),
    fetchCharacters('https://rickandmortyapi.com/api/character/?page=3'),
  ]);

  return [].concat(...promisesResult);
};

function fetchCharacters(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results)
    .then((characters) => characters.map(selectRelevantData))
    .then((characters) => characters.map(translateCharacterInfo));
}

function translateCharacterInfo(character) {
  character.specie = character.specie === 'Human' ? 'Humano' : 'Alien';
  character.status = translateCharacterStatus(character);
  return character;
}

function translateCharacterStatus(character) {
  if (character.status === 'Alive') {
    return 'Vivo';
  }
  if (character.status === 'Dead') {
    return 'Muerto';
  }
  if (character.status === 'unknown') {
    return 'Desconocido';
  }
}

function selectRelevantData(character) {
  return {
    id: character.id,
    image: character.image,
    name: character.name,
    status: character.status,
    specie: character.species,
    origin: character.origin.name,
    episodes: character.episode.length,
    gender: character.gender,
  };
}

export default getDataFromApi;
/****************************
 Da error al ejecutar los test con export default y necesitamos module.exports.
 El problema es que con module.export da error al hacer el run docs.
 He tratado de averiguar el por qué, pero no lo he conseguido. Por tanto, dejo comentado
 el module.exports para poder revisarlo.
 ****************************/
//module.exports = getDataFromApi;
