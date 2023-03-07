const sendData = async () => {
  let formName = document.querySelector('#form-name').value;
  let formScore = document.querySelector('#form-score').value;

  if (formName.length > 0 && formScore.length > 0) {
    const myBody = {
      user: formName,
      score: formScore,
    };
    fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Rf9PJnnTloUClo7QRgfX/scores/',
      {
        method: 'POST',
        body: JSON.stringify(myBody), // string or object
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    document.querySelector('.form-add-msg').style.display = 'none';
    document.querySelector('.form-add-msg').style.display = 'block';
    formName = '';
    formScore = '';
  }
};

const send = () => {
  document.querySelector('.form-submit').addEventListener('click', (event) => {
    event.preventDefault();
    sendData();
  });
};

send();
// export default send();
