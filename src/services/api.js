const getWordFromApi = () => {
  return fetch('https://dev.adalab.es/api/random/word')
    .then((response) => response.json())
    .then((response) => {
      return response.word;
    });
};

export default getWordFromApi;
