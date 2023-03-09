const myBody = { name: 'My cool new game' };

const userAction = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
    {
      method: 'POST',
      body: JSON.stringify(myBody), // string or object
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const myJson = await response.json();
  return myJson;
};

userAction();