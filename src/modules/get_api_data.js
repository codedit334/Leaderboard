const getData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Rf9PJnnTloUClo7QRgfX/scores/',
    {
      method: 'GET',
    },
  );
  const myJson = await response.json();
  const result = await myJson.result;

  const list = document.querySelector('.scores-display-list');

  list.innerHTML = '';
  result.forEach((obj) => {
    list.innerHTML += `<li>${obj.user}: ${obj.score}</li>`;
  });
};

const get = () => {
  document.querySelector('.refresh').addEventListener('click', () => {
    getData();
  });
  document.querySelector('.refresh').click();
};
get();
